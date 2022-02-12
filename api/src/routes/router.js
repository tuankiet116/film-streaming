const express = require('express')
const router = express.Router()

let FilmsRouters = require('./FilmsRouter')
let UserRouter = require('./UserRouter')
let TypeRouter = require('./TypeRouter')

router.use('/films', FilmsRouters)
router.use('/auth', UserRouter)
router.use('/type', TypeRouter)

module.exports = router