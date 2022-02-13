const express = require('express')
const cors = require('cors')
const router = express.Router()

const AuthRouter = require('./AuthRouter')
const FilmRouter = require('./FilmRouter')
const TypeRouter = require('./TypeRouter')
const UserRouter = require('./UserRouter')

router.use('/auth', AuthRouter)
router.use('/film', FilmRouter)
router.use('/type', TypeRouter)
router.use('/user', UserRouter)

module.exports = router