const express = require('express');
const router = express.Router();

const AdminMiddleWare = require('../../middleware/admin')
const AdminValidator = require('../../validator/Admin/AdminValidator')
const TypeController = require('../../controllers/Admin/TypeController')

router.get('/list',
    AdminMiddleWare.checkAuthIsAdmin,
    TypeController.list
)

router.get('/show/:id',
    AdminValidator.AdminShowType(),
    AdminMiddleWare.checkAuthIsAdmin,
    TypeController.show
)

router.delete('/delete/:id', 
    AdminValidator.AdminDeleteType(),
    AdminMiddleWare.checkAuthIsAdmin,
    TypeController.deleteAction
)

router.post('/create', 
    AdminValidator.AdminCreateType(),
    AdminMiddleWare.checkAuthIsAdmin,
    TypeController.create
)

router.put('/update/:id', 
    AdminValidator.AdminUpdateType(),
    AdminMiddleWare.checkAuthIsAdmin,
    TypeController.update
)

module.exports = router