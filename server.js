require('rootpath')()
const serverless = require('serverless-http');
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const basicAuth = require('_helpers/basic-auth')
const errorHandler = require('_helpers/error-handler')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// use basic HTTP auth to secure the api
app.use(basicAuth)

// api routes
app.use('/users', require('./users/users.controller'))
app.use('/hours', require('./hours/hours.controller'))
app.use('/summary', require('./summary/summary.controller'))

// global error handler
app.use(errorHandler)

// To run on localhost, uncomment these lines:
// const port = process.env.NODE_ENV === 'prod' ? 80 : 4000
// const server = app.listen(port, function () {
//     console.log('Server listening on port ' + port)
// })

module.exports.handler = serverless(app);