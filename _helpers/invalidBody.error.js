const CustomError = require('./custom.error')

class InvalidBodyError extends CustomError {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

module.exports = InvalidBodyError