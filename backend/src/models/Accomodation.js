// models/Accomodation.js
const mongoose = require('mongoose');
const accomodationSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['accomodation', 'host'], required: true }
});
module.exports = mongoose.model('Accomodation', userSchema);