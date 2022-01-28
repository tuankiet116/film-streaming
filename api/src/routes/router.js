const express = require('express')
const cors = require('../configs/cors.config')
const router = express.Router()

let filmsRouters = require('./filmsRouter')

router.use('/films', cors, filmsRouters)

module.exports = router