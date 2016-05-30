var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

var routes = require('./routes')

var app = express()
var PORT = process.env.PORT || 3000

app.engine('hbs', hbs({
  extname: 'hbs'
}))

app.set('view engine', 'hbs')

app.get('/', routes.home)

app.listen(PORT, function () {
  console.log('Server is listening on:', PORT)
})
