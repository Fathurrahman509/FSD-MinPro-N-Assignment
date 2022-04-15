const fs = require('fs')

class merchant {
    static getMerchant() {
        const data = JSON.parse(fs.readFileSync('merchants.json'))
        return data
    }
}

module.export = merchant