const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController')

router.get('/list', filmController.list)
router.get('/list-by-type', filmController.listByType)
router.get('/film-information', filmController.detail)

module.exports = router