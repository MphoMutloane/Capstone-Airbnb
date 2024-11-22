const User = require("../models/User");
const { validationResult } = require("express-validator");

class userController {
    static async signup(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, phone, email, password, type, status } = req.body;

        const data = { name, phone, email, password, type, status };

        try {
            let user = await new User(data).save();
            res.status(201).send(user);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = userController;



