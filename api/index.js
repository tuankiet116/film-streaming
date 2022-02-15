const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
dotenv.config()

const port = process.env.PORT || 3333
const app = express()
app.use(cors())

let routers = require('./src/routes/router')

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', routers)

app.use('/profiles', express.static('./data/profiles'))
app.use('/actors', express.static('./data/actors'))

let server = app.listen(port, function () {
    console.log(`Server is running on port ${port}`)
})