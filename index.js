require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port

const merchant = [{
    "id": 11,
    "password": 'eleven',
    "name": 'midori',
    'address': 'surabaya',
    'join_date': '21 march 2021',
    'phone_number': '0821-5647-9965',
}, {
    "id": 12,
    "password": 'twelve',
    "name": 'histuji',
    'address': 'surabaya',
    'join_date': '15 march 2021',
    'phone_number': '0821-1155-2649',
}]

const product = [{
    "id": 1,
    "name": 'cap',
    "quantity": 'good',
    'price': '7000'
}, {
    "id": 2,
    "name": 'shoes',
    "quantity": 'good',
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

app.get('/product', (req, res) => {
    res.status(200).json(product)
})

app.get('/product/:id', (req, res) => {
    const id = req.params.id
    let foundProduct = null

    for (let index = 0; index < product.length; index++) {
        if (product[index].id == id) {
            foundProduct = merchant[index]
            break;
        }
    }
    res.status(200).json(foundProduct)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
