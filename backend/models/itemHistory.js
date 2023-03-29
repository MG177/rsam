const mongoose = require('mongoose');

const itemHistorySchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  note: {
    type: String,
  },
});

module.exports = mongoose.model('ItemHistory', itemHistorySchema);
