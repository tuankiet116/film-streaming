const express = require('express');
const router = express.Router();
const filmController = require('../controllers/FilmController')
const cors = require('../configs/cors.config')
const FilmValidator = require('../validator/FilmValidator')
const FilmMiddleWare = require('../middleware/stream')

router.use(cors)

router.get('/list', filmController.list)
router.get('/list-by-type', filmController.listByType)
router.get('/film-information/:id',
    FilmValidator.filmDetail(),
    FilmMiddleWare,
    filmController.detail
)

router.get('/stream/:id',
    FilmValidator.checkStream(),
    FilmMiddleWare,
    filmController.stream
)

module.exports = router