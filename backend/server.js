const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./src/routes/userRoutes');
const accommodationRoutes = require('./src/routes/accomodationRoutes');
const reservationRoutes = require('./src/routes/reservationRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.setConfigs();
        this.setRoutes();
        this.error404Handler();
        this.handleErrors();
    }

    setConfigs() {
        this.connectMongoDB();
        this.allowCors();
        this.configureBodyParser();
    }

    connectMongoDB() {
        const dbUri = process.env.MONGO_URI; // Using dotenv directly
        mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log("MongoDB connected"))
            .catch(err => {
                console.error("MongoDB connection error:", err);
                process.exit(1); // Exit if the connection fails
            });
    }

    allowCors() {
        this.app.use(cors());
    }

    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    setRoutes() {
        this.app.use('/api/users', userRoutes);
        this.app.use('/api/accommodations', accommodationRoutes);
        this.app.use('/api/reservations', reservationRoutes);
    }

    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: 'Not found',
                status_code: 404
            });
        });
    }

    handleErrors() {
        this.app.use((error, req, res, next) => {
            console.error(error);
            const errorStatus = error.status || 500;
            res.status(errorStatus).json({
                message: error.message || 'Something went wrong. Please try again.',
                status_code: errorStatus
            });
        });
    }

    start() {
        const port = process.env.PORT || 5000;
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}

// Instantiate and start the server
const server = new Server();
server.start();



