const express = require('express');
const router = express.Router();
const withdrawalController = require('../../Controller/walletcontroller/withdrawalccontroller');
const authMiddleware = require('../../middleware/authMiddleware'); // You should have auth middleware

// Protected routes
router.post('/create', authMiddleware.protect, withdrawalController.createWithdrawal);
router.get('/all', authMiddleware.protect, withdrawalController.getWithdrawals);
router.put('/update/:id', authMiddleware.protect, withdrawalController.updateWithdrawalStatus);

module.exports = router;
