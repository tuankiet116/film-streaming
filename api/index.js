const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

dotenv.config()

const port = process.env.PORT || 3333
const app = express()

let routers = require('./src/routes/router')

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', routers)

let server = app.listen(port, function () {
    console.log(`Server is running on port ${port}`)
})