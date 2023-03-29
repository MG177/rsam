const Location = require('../models/location');

// GET all locations
exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET a single location
exports.getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.status(200).json(location);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE a location
exports.createLocation = async (req, res) => {
  const location = new Location({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const newLocation = await location.save();
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE a location
exports.updateLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    location.name = req.body.name;
    location.description = req.body.description;
    const updatedLocation = await location.save();
    res.status(200).json(updatedLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a location
exports.deleteLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    await location.remove();
    res.status(200).json({ message: 'Location deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
