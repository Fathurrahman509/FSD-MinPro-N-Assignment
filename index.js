require('dotenv').config()
const { application } = require('express')
const express = require('express')
const app = express()
const port = process.env.port
const fs = require('fs')

//parse aplication/json
var bodyParser = require('body-parser')
app.use(bodyParser.json())

const merchant = [{
    'id': 3,
    'password': 'eleven',
    'name': 'midori',
    'address': 'surabaya',
    'join_date': '21 march 2021',
    'phone_number': '0821-5647-9965',
}, {
    'id': 4,
    'password': 'twelve',
    'name': 'histuji',
    'address': 'surabaya',
    'join_date': '15 march 2021',
    'phone_number': '0821-1155-2649',
}]

const product = [{
    'id': 1,
    'name': 'cap',
    'quantity': 'good',
    'price': '7000'
}, {
    'id': 2,
    'name': 'shoes',
    'quantity': 'good',
    'price': '8000'
}]

// app.get('/', (req, res) => {
//   res.send('Anjayy berhasil')
// })

app.get('/merchant', (req, res) => {
    res.status(200).json(merchant)
})

app.get('/merchant/:id', (req, res) => {
    const id = req.params.id
    let foundMerchant = null

    for (let index = 0; index < merchant.length; index++) {
        if (merchant[index].id == id) {
            foundMerchant = merchant[index]
            break;
        }
    }
    res.status(200).json(foundMerchant)
})

app.get('/detail-merchant', (req,res) => {
    console.log(req.query)
    const id = req.query.merchant
    let foundMerchant = null

    for (let index = 0; index < array.merchant; index++) {
        if (merchant[index].id == id) {
            foundMerchant = merchant[index]
            break;
        }
    }
    res.status(200).json(foundMerchant)
})

app.post('./merchant', (req, res) => {
    console.log(req.body)
    membre.push(req.body)
    fs.writeFileSync('merchant.json', JSON.stringify(merchant, null, 2))
    res.status(201).json(req.body)
})

app.get('/product', (req, res) => {
    res.status(200).json(product)
})

app.get('/product/:id', (req, res) => {
    const id = req.params.id
    let foundProduct = null

    for (let index = 0; index < product.length; index++) {
        if (product[index].id == id) {
            foundProduct = product[index]
            break;
        }
    }
    res.status(200).json(foundProduct)
})

app.get('/detail-product', (req,res) => {
    console.log(req.query)
    const id = req.query.product
    let foundProduct = null

    for (let index = 0; index < array.product; index++) {
        if (product[index].id == id) {
            foundProduct = product[index]
            break;
        }
    }
    res.status(200).json(foundProduct)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
