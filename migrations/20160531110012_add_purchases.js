exports.up = function (knex, Promise) {
  return knex.schema.table('customers', function (table) {
    table.string('purchases')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('customers', function (table) {
    table.dropColumn('purchases')
  })
};
