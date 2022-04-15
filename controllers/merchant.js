const merchant = require('../models/merchant.js')

class controllersMerchant {
    static getMerchant(req, res) {
        res.status(200).json(merchant.getMerchant())
    }

    static createMerchant (req, res) {
        const data = req.body
        merchant.createMerchant(data)
        res.status(201).json(data)
    }

    static updateMerchant (req, res) {
        const data = req.body
        merchant.updateMerchant(data)
        res.status(201).json(data)
    }

    static deleteMerchant (req, res) {
        const data = req.body
        merchant.deleteMerchant(data)
        res.status(200).json(data)
    }
}

module.exports = controllersMerchant