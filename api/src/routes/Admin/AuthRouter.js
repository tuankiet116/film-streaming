const express = require('express');
const router = express.Router();
const cors = require('../../configs/cors.admin')

const AdminMiddleWare = require('../../middleware/admin')
const AdminValidator = require('../../validator/Admin/AdminValidator')
const AuthController = require('../../controllers/Admin/AuthController')

router.use(cors)
router.post('/login',
    AdminValidator.AdminLoginValidate(),
    AdminMiddleWare.handleValidatorErr,
    AuthController.login
)

module.exports = router