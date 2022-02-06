const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const cors = require('../configs/cors.config');
const middleWare = require('../middleware/auth');
const UserValidation = require('../validator/UserValidator')

router.post('/register',
    cors,
    UserValidation.UserRegisterValidate(),
    middleWare.loginMiddleWare,
    UserController.register
)

router.post('/login',
    cors,
    UserValidation.UserLoginValidate(),
    middleWare.loginMiddleWare,
    UserController.login
)

module.exports = router