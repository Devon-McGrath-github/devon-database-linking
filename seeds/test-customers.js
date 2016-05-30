exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('customers').del(),

    // Inserts seed entries
    knex('customers').insert({
      id: 1,
      firstName: 'Chance',
      lastName: 'TheRapper'
    }),
    knex('customers').insert({
      id: 2,
      firstName: 'DEAN',
      lastName: 'Hyuk'
    }),
    knex('customers').insert({
      id: 3,
      firstName: 'John',
      lastName: 'Doe'
    })
  );
};
