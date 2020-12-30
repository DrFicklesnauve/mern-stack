require('./db.js')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 4000

app.use(bodyParser.json())
app.use(cors({ origin: 'http://localhost:3000' }))
var postTimeRoutes = require('./controllers/postTimeController')

app.listen(PORT, () => console.log(`Server started at ${PORT}`))

app.use('/postTime', postTimeRoutes)