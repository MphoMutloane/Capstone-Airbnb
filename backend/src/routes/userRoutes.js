const { Router } = require("express");
const userController = require("../controllers/userController");
const userValidators = require("../validators/userValidators");
const GlobalMiddleware = require("../middleware/GlobalMiddleware");

class UserRoutes {
    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
    }

    getRoutes() {}

    postRoutes() {
        this.router.post("/signup", userValidators.signup(), GlobalMiddleware.checkError, userController.signup);
    }
}

module.exports = new UserRoutes().router;

