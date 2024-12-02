const { body } = require("express-validator");
const User = require("../models/User");

class userValidators {
    static signup() {
        return [
            body("username", "Username is required")
            .isString()
            .isUsername()
            .custom(async (username) => {
                const existingUser = await User.findOne({ username });
                if (existingUser) {
                    throw new Error("User Already Exists");
                }
            }),
            body("password", "Password is required")
                .isAlphanumeric()
                .isLength({ min: 8, max: 25 })
                .withMessage("Password must be between 8 - 25 characters long."),
            body("role", "User role type is required").isString()
        ];
    }

    static login() {
        return [
            body("username", "Username is required")
                .isUsername()
                .custom(async (username, { req }) => {
                    const existingUser = await User.findOne({ username });
                    if (!existingUser) {
                        throw new Error("No user registered with this username.");
                    }
                    req.user = existingUser; 
                }),
            body("password", "Password is required").isAlphanumeric(),
        ];
    }
}

module.exports = userValidators;



