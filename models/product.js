const fs = require('fs')

class product {
    //get
    static getProduct() {
        const data = JSON.parse(fs.readFileSync('products.json'))
        return data
    }

    //post
    static createProduct(data) {
        const allDataProduct = JSON.parse(fs.readFileSync('products.json'))
        allDataProduct.push(data)
        fs.writeFileSync('products.json', JSON.stringify(allDataProduct, null, 2))
    }
}

module.exports = product