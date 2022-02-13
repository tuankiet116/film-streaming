const express = require('express');
const router = express.Router();
const cors = require('../../configs/cors.admin')

const AdminMiddleWare = require('../../middleware/admin')
const AdminValidator = require('../../validator/Admin/AdminValidator')
const FileValidator = require('../../validator/Admin/FileValidator')
const FilmController = require('../../controllers/Admin/FilmController')

router.use(cors)

router.get('/list',
    AdminMiddleWare.checkAuthIsAdmin,
    FilmController.list
)

router.get('/show/:id',
    AdminValidator.AdminShowFilm(),
    AdminMiddleWare.checkAuthIsAdmin,
    FilmController.show
)

router.get('/search',
    AdminValidator.AdminSearchFilm(),
    AdminMiddleWare.checkAuthIsAdmin,
    FilmController.search
)

router.delete('/delete/:id',
    AdminValidator.AdminDeleteFilm(),
    AdminMiddleWare.checkAuthIsAdmin,
    FilmController.deleteAction
)

router.post('/create',
    AdminMiddleWare.checkAuthIsAdmin,
    FileValidator.AdminUploadMovie.fields([
        { name: 'source', maxCount: 1 },
        { name: 'profile', maxCount: 1 },
    ]),
    AdminValidator.AdminCreateFilm(),
    AdminMiddleWare.handleValidatorErr,
    FilmController.create
)

router.post('/update/:id',
    AdminMiddleWare.checkAuthIsAdmin,
    FileValidator.AdminUploadMovie.fields([
        { name: 'source', maxCount: 1 },
        { name: 'profile', maxCount: 1 },
    ]),
    AdminValidator.AdminUpdateFilm(),
    AdminMiddleWare.handleValidatorErr,
    FilmController.update
)

module.exports = router