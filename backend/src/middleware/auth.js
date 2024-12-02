const jwt = require("jsonwebtoken");

const AuthMiddleware = (req, res, next) => {
    try {
        // Extract the token from the Authorization header
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "Access Denied: No token provided"  });
        }

        // Verify the token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Attach the decoded payload to req.user

        next(); // Proceed to the next middleware or controller
    } catch (error) {
        return res.status(400).json({ message: "Invalid or expired token" });
    }
};

module.exports = AuthMiddleware;


