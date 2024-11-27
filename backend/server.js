const express = require('express');
const mongoose = require('mongoose');
const { getEnvironmentVariables } = require('./src/environments/environment');
const userRoutes = require('./src/routes/userRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const bannerRoutes = require('./src/routes/bannerRoutes');
require('dotenv').config(); 

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
        const dbUri = getEnvironmentVariables().db_uri; // Get the MongoDB URI
        console.log('Connecting to MongoDB with URI:', dbUri);
        console.log('Environment:', process.env.NODE_ENV);


        mongoose.connect(dbUri)
            .then(() => console.log("MongoDB connected"))
            .catch((err) => {
                console.error("MongoDB connection error:", err);
                process.exit(1); 
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
        this.app.use('/src/uploads', express.static("src/uploads"));
        this.app.use('/api/user', userRoutes);
        this.app.use('/api/banner', bannerRoutes);
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
            console.error(error); // Log error details
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message || 'Something went wrong. Please try again.',
                status_code: errorStatus
            });
        });
    }
}

const server = new Server();
const port = process.env.PORT || 5000;

server.app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

