const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

class product {
    //get
    static getProduct() {
        const data = JSON.parse(fs.readFileSync('products.json'))
        return data
    }

    //post
    static createProduct(data) {
        const allDataProduct = JSON.parse(fs.readFileSync('products.json'))
        allDataProduct.push({...data, id: uuidv4()})
        // allDataProduct.push(data)
        fs.writeFileSync('products.json', JSON.stringify(allDataProduct, null, 2))
    }

    // create database
    static createProductDatabase(data) {
        const query = `INSERT into products (id, name) VALUES (?, ?)`
        
        dbProduct.run(query, [data.id, data, data.name]), function (err) {
            if(err) {
                console.log(err)
            }
        }
        
    }

    //put 
    static updateProduct(data) {
        const allDataUpdateProduct = JSON.parse(fs.readFileSync('products.json'))
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            if(data[i].id == req.params.id) {
                console.log(data[i])
                data[i] = req.body
                fs.writeFileSync('products.json', JSON.stringify(allDataUpdateProduct, null, 2))
                break;
            }
        }
    }

    //delete
    static deleteProduct(data) {
        const allDataDeleteProduct = JSON.parse(fs.readFileSync('products.json'))
        allDataDeleteProduct = allDataDeleteProduct.filter((product) => allDataDeleteProduct.data == data)
    }

    static findByIdProductModel(id){
        const allDataFindById = JSON.parse(fs.readFileSync('merchants.json'))
        return findByIdProductModel(val => val.id == id)
    }

}

module.exports = product