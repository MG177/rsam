// itemController.js

const Item = require('../models/item');
const ItemHistory = require('../models/itemHistory');

exports.createItem = async (req, res) => {
  try {
    const { name, description, location } = req.body;
    const newItem = await Item.create({
      name,
      description,
      location
    });
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating item' });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundItem = await Item.findById(id);
    if (!foundItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(foundItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting item' });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting items' });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, location } = req.body;
    const updatedItem = await Item.findByIdAndUpdate(id, {
      name,
      description,
      location
    }, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating item' });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting item' });
  }
};

exports.getItemHistoryByItemId = async (req, res) => {
  try {
    const { id } = req.params;
    const itemHistory = await ItemHistory.find({ itemId: id }).sort({ date: -1 });
    if (!itemHistory) {
      return res.status(404).json({ message: 'Item history not found' });
    }
    res.status(200).json(itemHistory);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createItemHistory = async (req, res) => {
  const { id } = req.params;
  const { condition, note } = req.body;
  // item = id;
  try {
    const itemHistory = new ItemHistory({
      item: id,
      condition,
      note
    });
    await itemHistory.save();
    res.status(201).json(itemHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: id});
  }
};