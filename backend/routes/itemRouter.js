const express = require('express');
const router = express.Router();
const itemController = require('../controllers/items.controller');

router.post('/', itemController.createItem);
router.get('/:id', itemController.getItemById);
router.get('/', itemController.getAllItems);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;