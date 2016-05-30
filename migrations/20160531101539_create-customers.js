exports.up = function (knex, Promise) {
  console.log('Creating Customers Table')
  return knex.schema.createTableIfNotExists('customers', function (table) {
    table.increments('id').primary()
    table.string('firstName')
    table.string('lastName')
  })
};

exports.down = function (knex, Promise) {
  console.log('Dropping Customers Table')
  return knex.schema.dropTableIfExists('customers').then(function () {
    console.log('Customers table was dropped')
  })
};
