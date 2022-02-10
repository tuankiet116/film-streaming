const express = require('express');
const router = express.Router();
const TypeController = require('../controllers/TypeController')
const cors = require('../configs/cors.config')

router.use(cors)

router.get('/list', TypeController.list)
router.get('/info/:typeID', TypeController.detail)

module.exports = router