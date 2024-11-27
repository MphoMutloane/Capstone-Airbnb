const { body } = require("express-validator");
const User = require("../models/User");

class userValidators {
    static signup() {
        return [
            body("name", "Name is required").isString(),
            body("phone", "Phone number is required").isString(),
            body("email", "Email is required")
                .isEmail()
                .custom(async (email) => {
                    const existingUser = await User.findOne({ email });
                    if (existingUser) {
                        throw new Error("User Already Exists");
                    }
                }),
            body("password", "Password is required")
                .isAlphanumeric()
                .isLength({ min: 8, max: 25 })
                .withMessage("Password must be between 8 - 25 characters long."),
            body("type", "User role type is required").isString(),
            body("status", "User status is required").isString(),
        ];
    }

    static login() {
        return [
            body("email", "Email is required")
                .isEmail()
                .custom(async (email, { req }) => {
                    const existingUser = await User.findOne({ email });
                    if (!existingUser) {
                        throw new Error("No user registered with this email.");
                    }
                    req.user = existingUser; 
                }),
            body("password", "Password is required").isAlphanumeric(),
        ];
    }
}

module.exports = userValidators;



