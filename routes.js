var config = require('./knexfile').development
var knex = require('knex')(config)

module.exports = {
  home: home
}

function home(req, res) {
  knex.select()
    .table('customers')
    .then(function (data) {
      console.log(data)
      var customerData = {
        customer: data
      }
      res.render('home', customerData)
    })
}
