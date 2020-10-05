const {open} = require('sqlite');
const sqlite3 = require('sqlite3');

const openDb = async () => {
  return open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  })
}

module.exports = { openDb };