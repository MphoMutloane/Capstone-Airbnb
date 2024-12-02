const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    accommodation: { type: mongoose.Schema.Types.ObjectId, ref: 'Accommodation', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    guests: { type: Number, required: true },
    totalCost: { type: Number, required: true },
});

module.exports = mongoose.model('Reservation', reservationSchema);
