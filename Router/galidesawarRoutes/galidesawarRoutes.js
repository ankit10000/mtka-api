const express = require('express');
const router = express.Router();

const { placeBet, uploadResult, addGame ,getAllWinners } = require('../../Controller/GalidesawarBetcontroller/GalidesawarBetcontoller');
const { protect, adminProtect } = require('../../middleware/authMiddleware'); // ✅ Correct import

// 🎯 Betting routes
router.post("/place-bet", protect, placeBet);
router.put('/set-result/:gameId', uploadResult);

// ➕ Add game route (protected with token middleware)
router.post('/add-game', protect, addGame); // Use adminProtect as second param if needed

router.get("/all-winners", protect, getAllWinners);


module.exports = router;
