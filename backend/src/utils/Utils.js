const bcrypt = require("bcrypt");
const multer = require("multer");

const storageOptions = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./backend/src/uploads");
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 159);
        cb(null, uniqueSuffix + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb (null, false);
    }
};

class Utils {

    multer = multer({ storage: storageOptions, fileFilter: fileFilter });

    static encryptPassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(hash);
                }
            });
        });
    }

    static comparePassword(data) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(data.password, data.encrypt_password, (err, same) => {
                if (err) {
                    reject(err);
                } else if (!same) {
                    reject(new Error("User and Password do not match"));
                } else {
                    resolve(true);
                }
            });
        });
    }

}

module.exports = Utils;




