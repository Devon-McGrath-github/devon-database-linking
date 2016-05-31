var config = require('./knexfile').development
var knex = require('knex')(config)

var data = module.exports = {
  home: home,
  getData: getData
}

function home(req, res) {
  knex.select()
    .table('customers')
    .then(function (data) {
      console.log('home.hbs    got data without issue')
      var customerData = {
        customer: data
      }
      res.render('home', customerData)
    })
    .catch(function (err) {
      console.error(err)
    })
}

function getData(req, res) {
  knex('customers')
    .then(function (data) {
      var customerData = {
        customer: data
      }
      console.log('display-data.hbs     got data without issue');
      res.render('display-data', customerData)
    })
    .catch(function (err) {
      console.error(err)
    })
}

function addData(req, res) {
  res.render('add-data')
}
