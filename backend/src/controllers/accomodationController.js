const Accommodation = require('../models/Accomodation');

const createAccommodation = async (req, res) => {
    try {
        const accommodation = new Accommodation(req.body);
        const savedAccommodation = await accommodation.save();
        res.status(201).json(savedAccommodation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAccommodations = async (req, res) => {
    try {
        const accommodations = await Accommodation.find();
        res.json(accommodations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createAccommodation, getAccommodations };


// Implement other CRUD operations similarly
