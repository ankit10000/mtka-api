const mongoose = require('mongoose');

const starlineGameSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
    unique: true
  },
  openingDisabled: {
    type: Boolean,
    default: false
  },
  closingDisabled: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('StarlineGame', starlineGameSchema);
