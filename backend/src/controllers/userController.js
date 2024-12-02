const { validationResult } = require("express-validator");
const User = require("../models/User");
const Utils = require("../utils/Utils");
const Jwt = require("../utils/Jwt");

class userController {
    static async signup(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password, role } = req.body;

        try {
            const hash = await Utils.encryptPassword(password);

            const data = { username, password: hash, role };

            // Create the user in the database
            let user = await new User(data).save();

            // Generate the JWT token after creating the user
            const payload = {
                username_id: username._id,
                role: user.role,
            };

            const token = Jwt.jwtSign(payload);

            // Send the response
            res.status(201).json({
                token: token,
                username: username,
            });
        } catch (e) {
            next(e);
        }
    }

    static async login(req, res, next) {
        const username = req.username;
        const password  = req.body.password;

        const data = {
            password,
            encrypt_password: user.password
        } ;
       
        try{
           await Utils.comparePassword(data);
           const payload = {
            username_id: username._id,
            role: username.role,
        };

        const token = Jwt.jwtSign(payload);

        res.status(200).json({
            token: token,
            username: username,
        });
    
        } catch(e) {
            next(e);
        }
    }

    static async profile(req, res, next) {
        try {
            const username = req.username;
            if (!username) {
                throw new Error("Username not found");
            }
            res.json(username);
        } catch (e) {
            next(e);
        }
    } 

}

module.exports = userController;




