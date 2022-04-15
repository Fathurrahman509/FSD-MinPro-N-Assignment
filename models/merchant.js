const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

class merchant {
    //get
    static getMerchant() {
        const data = JSON.parse(fs.readFileSync('merchants.json'))
        return data
    }

    //post
    static createMerchant(data) {
        const allDataMerchant = JSON.parse(fs.readFileSync('merchants.json'))
        allDataMerchant.push({...data, id: uuidv4()})
        // allDataMerchant.push(data)
        fs.writeFileSync('merchants.json', JSON.stringify(allDataMerchant, null, 2))
    }

    //put
    static updateMerchant(data) {
        const allDataUpdateMerchant = JSON.parse(fs.readFileSync('merchants.json'))
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            if(data[i].id == req.params.id) {
                console.log(data[i])
                data[i] = req.body
                fs.writeFileSync('merchants.json', JSON.stringify(allDataUpdateMerchant, null, 2))
                break;
            }
        }
    }

    //delete
    static deleteMerchant(data) {
        const allDataDeleteMerchant = JSON.parse(fs.readFileSync('merchants.json'))
        allDataDeleteMerchant = allDataDeleteMerchant.filter((merchant) => allDataDeleteMerchant.data == data)
    }
}

module.exports = merchant