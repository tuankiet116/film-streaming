const express = require('express')
const router = express.Router()

let FilmsRouters = require('./FilmsRouter')
let UserRouter = require('./UserRouter')
let TypeRouter = require('./TypeRouter')
let AdminRouter = require('./Admin')

router.use('/films', FilmsRouters)
router.use('/auth', UserRouter)
router.use('/type', TypeRouter)

router.use('/admin', AdminRouter)

module.exports = router