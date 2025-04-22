const StarlineGame = require('../../modal/starlineGamemodal/starlineGamemodal');

// ➕ Add new Starline Game
const addStarlineGame = async (req, res) => {
  const { gameName, openingDisabled, closingDisabled } = req.body;

  try {
    const existingGame = await StarlineGame.findOne({ gameName });

    if (existingGame) {
      return res.status(400).json({ message: 'Game already exists' });
    }

    const newGame = new StarlineGame({
      gameName,
      openingDisabled,
      closingDisabled,
    });

    await newGame.save();
    res.status(201).json({ message: 'Starline Game Added Successfully', game: newGame });

  } catch (error) {
    console.error('Error adding Starline game:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// 🛠️ Update Game Status (Disable/Enable Opening/Closing)
const updateGameStatus = async (req, res) => {
  const { gameName } = req.params;
  const { openingDisabled, closingDisabled } = req.body;

  try {
    const game = await StarlineGame.findOneAndUpdate(
      { gameName },
      { openingDisabled, closingDisabled },
      { new: true }
    );

    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }

    res.status(200).json({ message: 'Game status updated', game });
  } catch (error) {
    console.error('Error updating game status:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// 📄 Get All Games (for Admin Panel)
const getAllGames = async (req, res) => {
  try {
    const games = await StarlineGame.find();
    res.status(200).json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addStarlineGame,
  updateGameStatus,
  getAllGames
};
