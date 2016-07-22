var express = require('express')
var bodyParser = require('body-parser')
var helmet = require('helmet')
var HttpError = require('http-errors')
var apiErrorHandler = require('api-error-handler')

var routes = require('./routes/index')

var app = express()

app.use(helmet.hidePoweredBy())
app.use(bodyParser.json())

app.use('/', routes)

app.use((req, res, next) => {
  next(new HttpError.NotFound())
})

app.use(apiErrorHandler())

module.exports = app
