const express = require('express');
const router = express.Router();

const {
  addStarlineGame,
  updateGameStatus,
  getAllGames
} = require('../../Controller/starlineGameController/starlineGameController');

// ➕ Add a new Starline game (admin)
router.post('/add', addStarlineGame);

// 🔄 Update game open/close status by name (admin)
router.put('/update-status/:gameName', updateGameStatus);

// 📥 Get all Starline games (admin)
router.get('/all', getAllGames);

module.exports = router;
