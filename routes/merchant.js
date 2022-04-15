const express = require('express')
const router = express.Router()
const fs = require('fs')

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

router.get('/', (req, res) => {
    res.status(200).json(merchant)
})

router.get('/detail-merchant', (req,res) => {
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

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    let foundMerchant = null

    for (let index = 0; index < merchant.length; index++) {
        if (merchant[index].id == id) {
            foundMerchant = merchant[index]
            break;
        }
    }
    res.status(200).json(foundMerchant)
})

router.post('/', (req, res) => {
    console.log(req.body)
    merchant.push(req.body)
    fs.writeFileSync('merchants.json', JSON.stringify(merchant, null, 2))
    res.status(201).json(req.body)
})

router.put('/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync('merchants.json'))
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        if(data[i].id == req.params.id) {
            console.log(data[i])
            data[i] = req.body
            fs.writeFileSync('merchants.json', JSON.stringify(data, null, 2))
            break;
        }
    }
    res.status(201).json(req.body)
})

module.exports = router