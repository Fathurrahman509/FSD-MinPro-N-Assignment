require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port

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


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/merchant', (req, res) => {
    res.send('Anjayy')
  })

app.get('/product', (req, res) => {
    res.send('Anjayy')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
