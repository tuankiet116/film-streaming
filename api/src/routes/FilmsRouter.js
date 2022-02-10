const express = require('express');
const router = express.Router();
const filmController = require('../controllers/FilmController')
const cors = require('../configs/cors.config')
const FilmValidator = require('../validator/FilmValidator')
const FilmMiddleWare = require('../middleware/stream')

router.use(cors)

router.get('/films-by-type/:typeID', filmController.listByTypeID)

router.get('/list', filmController.listByType)

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

router.get('/search',
    filmController.search
)

module.exports = router