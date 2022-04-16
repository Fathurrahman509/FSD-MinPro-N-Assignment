// const { verbose } = require('sqlite3');
const sqlite3 = require('sqlite3').verbose()
const product_db = new sqlite3.Database('product.db')

module.exports = product_db