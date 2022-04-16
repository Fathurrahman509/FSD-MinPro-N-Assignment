const db = require('./product_db')

const crateProduct = `
    CREATE TABLE product(
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL
    )
`

db.serialize(() => {
    db.run(crateProduct, (err) => {
        if(!err) {
            console.log('table created')
        } else {
            console.log(err)
        }
    })
})