const express = require('express');
const router = express.Router();
const filmController = require('../controllers/FilmController')
const cors = require('../configs/cors.config')

router.get('/list', cors, filmController.list)
router.get('/list-by-type', cors, filmController.listByType)
router.get('/film-information', cors, filmController.detail)

module.exports = router