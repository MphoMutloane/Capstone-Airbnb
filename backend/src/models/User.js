const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() },
});

module.exports = mongoose.model("users", userSchema);

