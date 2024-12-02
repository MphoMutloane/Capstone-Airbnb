const { Router } = require("express");

class ReservationRoutes {
    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
    }

    getRoutes() {
    }

    postRoutes() {}
}

module.exports = new ReservationRoutes().router;