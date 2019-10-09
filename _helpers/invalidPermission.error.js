const CustomError = require('./custom.error')

class InvalidPermissionError extends CustomError {
    constructor(message) {
        super(message);
        this.status = 403;
    }
}

module.exports = InvalidPermissionError