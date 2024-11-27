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

        const { name, phone, email, password, type, status } = req.body;

        try {
            const hash = await Utils.encryptPassword(password);

            const data = { name, phone, email, password: hash, type, status };

            // Create the user in the database
            let user = await new User(data).save();

            // Generate the JWT token after creating the user
            const payload = {
                user_id: user._id,
                email: user.email,
                type: user.type,
            };

            const token = Jwt.jwtSign(payload);

            // Send the response
            res.status(201).json({
                token: token,
                user: user,
            });
        } catch (e) {
            next(e);
        }
    }

    static async login(req, res, next) {
        const user = req.user;
        const password  = req.body.password;

        const data = {
            password,
            encrypt_password: user.password
        } ;
       
        try{
           await Utils.comparePassword(data);
           const payload = {
            user_id: user._id,
            email: user.email,
            type: user.type,
        };

        const token = Jwt.jwtSign(payload);

        res.status(201).json({
            token: token,
            user: user,
        });
    
        } catch(e) {
            next(e);
        }
    }

    static async profile(req, res, next) {
        const user = req.user;
       
        try{
           const profile = await User.findById(user._id);
           if(profile) {
            res.send(profile);
           } else {
            throw new Error("User does not exist");
           }
        } catch(e) {
            next(e);
        }
    }


}

module.exports = userController;




