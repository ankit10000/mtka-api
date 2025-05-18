const express = require("express");
const { createGame, getActiveGames } = require("../../Controller/starlineGameController/starlineGameController");
const { protect } = require('../../middleware/authMiddleware');
const router = express.Router();

router.post("/create", createGame);
router.get("/all", getActiveGames);

module.exports = router;
