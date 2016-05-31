var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

var routes = require('./routes')

var app = express()
var PORT = process.env.PORT || 3000

app.get('/', routes.home)
app.get('/data', routes.getData)

app.engine('hbs', hbs({
  extname: 'hbs'
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.listen(PORT, function () {
  console.log('Server is listening on:', PORT)
})
