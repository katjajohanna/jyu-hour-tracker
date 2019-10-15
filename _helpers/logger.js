module.exports = logger

async function logger(req, res, next) {
    console.log('Method', req.method)
    console.log('Path', req.path)
    console.log('Params', req.params)
    console.log('Body', JSON.stringify(req.body))

    next()
}