const express = require('express');
const router = express.Router();
const locationController = require('../controllers/location.controller');

// GET all locations
router.get('/', locationController.getLocations);

// GET a single location by ID
router.get('/:id', locationController.getLocationById);

// CREATE a new location
router.post('/', locationController.createLocation);

// UPDATE a location by ID
router.put('/:id', locationController.updateLocation);

// DELETE a location by ID
router.delete('/:id', locationController.deleteLocation);

module.exports = router;