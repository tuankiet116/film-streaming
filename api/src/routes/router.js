const express = require('express')
const router = express.Router()

let FilmsRouters = require('./FilmsRouter')
let UserRouter = require('./UserRouter')

router.use('/films', FilmsRouters)
router.use('/auth', UserRouter)

module.exports = router