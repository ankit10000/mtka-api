const express = require('express');
const router = express.Router();
const upload = require('../../middleware/MulterMiddleware');
const {
  uploadHomeDp,
  getHomeDp,
  deleteHomeDp,
  getAllHomeDps,

} = require('../../Controller/Admincontroller/homedpcontroller');

router.post('/upload', upload.array('homedp'), uploadHomeDp);
router.get('/latest', getHomeDp);
router.delete('/delete/:id', deleteHomeDp);
router.get('/all-dpimage', getAllHomeDps);

module.exports = router;
