const product = require('../models/product.js')

class controllersProduct {
    static getProduct(req, res) {
        res.status(200).json(product.getProduct())
    }

    static createProduct (req, res) {
        const data = req.body
        product.createProduct(data)
        res.status(201).json(data)
    }
}

module.exports = controllersProduct