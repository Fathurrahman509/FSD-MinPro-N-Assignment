require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port
const fs = require('fs')

// parse application/json
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use('/members')

const members= [{
    id: 1,
    name: 'rifaldi'
}, {
    id: 2,
    name: 'ony'
}]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/members', (req, res) => {
    res.status(200).json(members)
})

app.post('/members', (req, res) => {
    console.log(req.body)
    members.push(req.body)
    fs.writeFileSync('member.json', JSON.stringify(members, null, 2))
    res.status(201).json(req.body)
})

app.put('/members/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync('member.json'))
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        if(data[i].id == req.params.id) {
            console.log(data[i])
            data[i] = req.body
            fs.writeFileSync('member.json', JSON.stringify(data, null, 2))
            break;
        }
    }
    res.status(201).json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})