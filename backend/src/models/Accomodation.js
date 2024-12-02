const mongoose = require('mongoose');

const accommodationSchema = mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    guests: { type: Number, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }]
});

module.exports = mongoose.model('Accommodation', accommodationSchema);
