const express = require('express');
const router = express.Router();
const itemHistoryController = require('../controllers/itemHistory.controller');

router.get('/', itemHistoryController.getItemHistoryList);
router.post('/', itemHistoryController.createItemHistory);
router.get('/:id', itemHistoryController.getItemHistoryById);
router.put('/:id', itemHistoryController.updateItemHistory);
router.delete('/:id', itemHistoryController.deleteItemHistory);
router.post('/items/:id/history', itemHistoryController.createItemHistory);

module.exports = router;