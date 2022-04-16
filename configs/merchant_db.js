// const { verbose } = require('sqlite3');
const sqlite3 = require('sqlite3').verbose()
const merchant_db = new sqlite3.Database('merchant.db')

module.exports = merchant_db