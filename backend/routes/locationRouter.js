const express = require('express');
const router = express.Router();
const locationController = require('../controllers/location.controller');

// GET all locations
router.get('/locations', locationController.getLocations);

// GET a single location by ID
router.get('/locations/:id', locationController.getLocationById);

// CREATE a new location
router.post('/locations', locationController.createLocation);

// UPDATE a location by ID
router.put('/locations/:id', locationController.updateLocation);

// DELETE a location by ID
router.delete('/locations/:id', locationController.deleteLocation);

module.exports = router;