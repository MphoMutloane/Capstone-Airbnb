const express = require('express');
const { Router } = require("express");
const { createAccommodation, getAccommodations } = require('../controllers/accomodationController');
const router = express.Router();

class AccomodationRoutes {
    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
    }
    getRoutes() {
        this.router.get('/', getAccommodations);
    }
    postRoutes() {
        this.router.post('/', createAccommodation);
    }
}


module.exports = new AccomodationRoutes().router;
