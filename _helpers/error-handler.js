const CustomError = require('./custom.error')

module.exports = errorHandler

function errorHandler(err, req, res, next) {
    if (err instanceof CustomError) {
        return res.status(err.status).json({ message: err.message })
    }

    // default to 500 server error
    console.error(err.stack)
    return res.status(500).json({ message: err.message })
}