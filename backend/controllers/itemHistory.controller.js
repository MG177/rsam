const ItemHistory = require('../models/itemHistory');

exports.getItemHistoryList = async (req, res) => {
  try {
    const itemHistoryList = await ItemHistory.find().populate('itemId', 'name');
    res.status(200).json(itemHistoryList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createItemHistory = async (req, res) => {
  try {
    const { itemId, date, note } = req.body;
    const newItemHistory = new ItemHistory({
      itemId,
      date,
      note
    });
    const savedItemHistory = await newItemHistory.save();
    res.status(201).json(savedItemHistory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getItemHistoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const itemHistory = await ItemHistory.findById(id).populate('itemId', 'name');
    if (!itemHistory) {
      return res.status(404).json({ message: 'Item History not found' });
    }
    res.status(200).json(itemHistory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateItemHistory = async (req, res) => {
  try {
    const { id } = req.params;
    const { itemId, date, note } = req.body;
    const itemHistory = await ItemHistory.findByIdAndUpdate(
      id,
      {
        itemId,
        date,
        note
      },
      { new: true }
    );
    if (!itemHistory) {
      return res.status(404).json({ message: 'Item History not found' });
    }
    res.status(200).json(itemHistory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteItemHistory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItemHistory = await ItemHistory.findByIdAndDelete(id);
    if (!deletedItemHistory) {
      return res.status(404).json({ message: 'Item History not found' });
    }
    res.status(200).json(deletedItemHistory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
