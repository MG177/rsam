const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Division',
    required: true
  }
});

module.exports = mongoose.model('Item', itemSchema);
