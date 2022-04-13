require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    res.send('Anjayy')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
