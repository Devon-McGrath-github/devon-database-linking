var config = require('./knexfile').development
var knex = require('knex')(config)

module.exports = {
  data: data
}

function data() {
  knex.select()
    .table('customers')
    .then(function (data) {
      var customerData = {
        customer: data
      }
      console.log(customerData)
      return customerData
    })
}
