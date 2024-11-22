const express = require("express");
const mongoose = require("mongoose");
const { getEnvironmentVariables } = require("./src/environments/environment");
const userRoutes = require("./src/routes/userRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");


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
        console.log("Connecting to MongoDB with URI:", dbUri);

        mongoose.connect(dbUri)
            .then(() => console.log("MongoDB connected"))
            .catch((err) => console.error("MongoDB connection error:", err));
    }

    allowCors() {
        this.app.use(cors());
    }

    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        // this.app.use(bodyParser.json());
    }

    setRoutes() {
        this.app.use("/api/user", userRoutes);
    }

    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: "Not found",
                staus_code: 404
            });
        });
    }

    handleErrors() {
        this.app.use((error, req, res, next) => {
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message || "Something went wrong. Please try again.",
                staus_code: errorStatus
            });
        });
    }
}

module.exports = Server;
