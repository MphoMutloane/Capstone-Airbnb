class GlobalMiddleware {

    static checkError(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(new Error(errors.array()[0].msg))
        } else {
            next();
        }
    }
}

module.exports = GlobalMiddleware;
