const db = require('./merchant_db.js')

const crateMerchant = `
    CREATE TABLE merchant(
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL
    )
`

db.serialize(() => {
    db.run(crateMerchant, (err) => {
        if(!err) {
            console.log('table created')
        } else {
            console.log(err)
        }
    })
})