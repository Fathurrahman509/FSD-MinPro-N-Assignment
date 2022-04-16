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

    static findByIdProduct (req, res) {
        const data = req.body
        if(!data.id) {
            res.status(400).json({message:'id:required'})
        }

        const existingId = product.findByIdProductModel(data.id)
        if(existingId) {
            res.status(400).json({message:'id: is already'})
        }

        product.createProduct(data)
        res.status(201).json(data)
    }


    static updateProduct (req, res) {
        const data = req.body
        product.updateProduct(data)
        res.status(201).json(data)
    }

    static deleteProduct (req, res) {
        const data = req.body
        product.deleteProduct(data)
        res.status(200).json(data)
    }
}

module.exports = controllersProduct