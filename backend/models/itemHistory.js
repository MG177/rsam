const mongoose = require('mongoose');

const itemHistorySchema = new mongoose.Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
    condition: {
      type: String,
      enum: ["good", "bad"],
      required: true,
    },
    notes: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model('ItemHistory', itemHistorySchema);
