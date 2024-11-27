const { validationResult } = require("express-validator");
const Jwt = require("../utils/Jwt");

class GlobalMiddleware {
    static checkError(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors.array()[0].msg,  // Send the first error message
                status_code: 400
            });
        }
        next();
    }

    static adminRole(req, res, next) {
        const user = req.user;
        if(user.type !== "admin") {
            req.errorStatus = 401;
            next(new Error("You are an unathorized user."));
        };
        next();
    }
}

module.exports = GlobalMiddleware;
