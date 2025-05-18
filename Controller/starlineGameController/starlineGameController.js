const StarlineGame = require("../../modal/starlineGamemodal/starlineGamemodal");
const StarlineResult = require("../../modal/starlineGamemodal/StarlineResultmodal");
// Create a new game (gameDate is automatically today)
const createGame = async (req, res) => {
  try {
    const { gameName, openTime, closeTime } = req.body;
    const game = new StarlineGame({ gameName, openTime, closeTime });
    await game.save();
    res.status(201).json({ success: true, message: "Game created", data: game });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get active games for today
const getActiveGames = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const games = await StarlineGame.find({
      gameDate: { $gte: today, $lt: tomorrow },
      isActive: true
    });

    // Add result for each game
    const gamesWithResult = await Promise.all(
      games.map(async (game) => {
        const result = await StarlineResult.findOne({ gameId: game._id })
          .sort({ createdAt: -1 });

        return {
          ...game.toObject(),
          result: result ? {
            openDigits: result.openDigits,
            closeDigits: result.closeDigits,
            openResult: result.openResult,
            closeResult: result.closeResult,
            jodiResult: result.jodiResult
          } : null
        };
      })
    );

    res.status(200).json({ success: true, data: gamesWithResult });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get all games (for admin or dashboard)
const getGames = async (req, res) => {
  try {
    const games = await StarlineGame.find();
    res.status(200).json({ success: true, data: games });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { createGame, getActiveGames, getGames };
