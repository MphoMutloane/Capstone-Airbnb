const Accommodation = require('../models/Accommodation');

// Create Accommodation
exports.createAccommodation = async (req, res) => {
    try {
        const accommodation = new Accommodation(req.body);
        await accommodation.save();
        res.status(201).json(accommodation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Implement other CRUD operations similarly
