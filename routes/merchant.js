const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

const controllersMerchant = require('../controllers/merchant.js')


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

router.get('/', controllersMerchant.getMerchant)

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

router.post('/', controllersMerchant.createMerchant)

router.post('/', controllersMerchant.findByIdMerchant)

router.put('/:id', controllersMerchant.updateMerchant)

router.delete('/:id', controllersMerchant.deleteMerchant)

module.exports = router