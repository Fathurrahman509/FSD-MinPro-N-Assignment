const express = require('express')
const router = express.Router()
const fs = require('fs')
const controllersProduct = require('../controllers/product.js')



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

router.get('/', controllersProduct.getProduct)

router.get('/detail-product', (req,res) => {
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

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    let foundProduct = null

    for (let index = 0; index < product.length; index++) {
        if (product[index].id == id) {
            foundProduct = product[index]
            break;
        }
    }
    res.status(200).json(foundProduct)
})

router.post('/', controllersProduct.createProduct)

router.put('/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync('products.json'))
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        if(data[i].id == req.params.id) {
            console.log(data[i])
            data[i] = req.body
            fs.writeFileSync('products.json', JSON.stringify(data, null, 2))
            break;
        }
    }
    res.status(201).json(req.body)
})

module.exports = router