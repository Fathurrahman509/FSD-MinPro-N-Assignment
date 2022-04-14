require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port
const fs = require('fs')
const merchant = require('./routes/merchant.js')
const product = require('./routes/product.js')


//parse aplication/json
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use('/merchant', merchant)
app.use('/product', product)




app.get('/', (req, res) => {
  res.send('Anjayy berhasil')
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
