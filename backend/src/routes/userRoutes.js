const { Router } = require("express");
const userController = require("../controllers/userController");
const userValidators = require("../validators/userValidators");
const GlobalMiddleware = require("../middleware/GlobalMiddleware");
const AuthMiddleware = require("../middleware/auth"); 

class UserRoutes {
    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
    }

    getRoutes() {
        this.router.get(
            "/login",
            userValidators.login(),
            GlobalMiddleware.checkError,
            userController.login
        );
        this.router.get(
            "/profile",
            AuthMiddleware, 
            userController.profile
        );
    }

    postRoutes() {
        this.router.post(
            "/login",
            userValidators.login(),
            GlobalMiddleware.checkError,
            userController.login
        );
        this.router.post(
            "/signup",
            userValidators.signup(),
            GlobalMiddleware.checkError,
            userController.signup
        );
    }
}

module.exports = new UserRoutes().router;



