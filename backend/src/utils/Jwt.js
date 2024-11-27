const jwt = require("jsonwebtoken");
const { getEnvironmentVariables } = require("../environments/environment");

class Jwt {
    
static jwtSign(payload) {
    return jwt.sign(
        payload,
        getEnvironmentVariables().jwt_secret_key,
        { expiresIn: "180d" }
    );
}

}

module.exports = Jwt;