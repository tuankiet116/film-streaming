const express = require('express');
const router = express.Router();

const AdminMiddleWare = require('../../middleware/admin')
const AdminValidator = require('../../validator/Admin/AdminValidator')
const UserController = require('../../controllers/Admin/UserController')

router.get('/list',
    AdminMiddleWare.checkAuthIsAdmin,
    UserController.list
)

router.get('/show/:id',
    AdminValidator.AdminShowUser(),
    AdminMiddleWare.checkAuthIsAdmin,
    UserController.show
)

router.delete('/delete/:id', 
    AdminValidator.AdminDeleteUser(),
    AdminMiddleWare.checkAuthIsAdmin,
    UserController.deleteAction
)

module.exports = router