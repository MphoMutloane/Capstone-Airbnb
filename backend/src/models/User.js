const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'host'], default: 'user' },
});

module.exports = mongoose.model('User', userSchema);


