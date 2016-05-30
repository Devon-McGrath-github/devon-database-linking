var config = require('./knexfile').development
var knex = require('knex')(config)

knex('customers')
  // .select('lastName')
  .then(function (data) {
    console.log(data);
  })
  .catch()
