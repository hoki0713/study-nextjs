const {openDb} = require('./database-test-open');

openDb().then(async (db) => {
  db.migrate({force: 'last'});
  const people = await db.all('SELECT * FROM person');
  console.log('ALL PEOPLE', JSON.stringify(people, null, 2));

  const vehicles = await db.all('SELECT * FROM vehicle');
  console.log('ALL VEHICLES', JSON.stringify(vehicles, null, 3));
});