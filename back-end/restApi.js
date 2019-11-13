const express = require('express')
const db = require('./query')
const app = express()
const port = 3000
app.use(express.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })
  
app.get('/card', db.getCard)  
app.post('/card', db.addCard)

app.listen(port, () => console.log(`App running on the port ${port}`))