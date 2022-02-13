const { body, param, query } = require('express-validator')
const ErrorCode = require('../../constant/errorCodeConstant')
const FilmModel = require('../../models/FilmModel')
const { Op } = require('sequelize')

let AdminLoginValidate = () => {
    return [
        body('email')
            .exists().withMessage(ErrorCode.EMAIL_REQUIRED)
            .isEmail().withMessage(ErrorCode.INVALID_EMAIL),

        body('password')
            .isLength({ min: 8, max: 32 }).withMessage(ErrorCode.PASSWORD_INVALID)
            .trim(),

        body('rememberMe')
            .not()
            .isBoolean()
            .withMessage(ErrorCode.REMEMBER_ME_FORMAT)
    ]
}

let AdminShowFilm = () => {
    return [
        param('id')
            .exists()
            .isNumeric()
    ]
}

let AdminSearchFilm = () => {
    return [
        query('partern')
            .escape(),
        query('page')
            .isNumeric()
    ]
}

let AdminDeleteFilm = () => {
    return [
        param('id')
            .exists()
            .isNumeric()
    ]
}

let AdminShowType = () => {
    return [
        param('id')
            .exists()
            .isNumeric()
    ]
}

let AdminDeleteType = () => {
    return [
        param('id')
            .exists()
            .isNumeric()
    ]
}

let AdminCreateType = () => {
    return [
        body('name')
            .exists()
            .escape()
    ]
}

let AdminUpdateType = () => {
    return [
        body('name')
            .exists()
            .escape(),
        body('active')
            .exists()
            .toBoolean(),
        param('id')
            .isNumeric()
    ]
}

let AdminShowUser = () => {
    return [
        param('id')
            .exists()
            .isNumeric()
    ]
}

let AdminDeleteUser = () => {
    return [
        param('id')
            .exists()
            .isNumeric()
    ]
}

let AdminCreateFilm = () => {
    return [
        body('name')
            .exists().withMessage(ErrorCode.FIELD_REQUIRE)
            .isLength({ min: 1 })
            .escape()
            .custom(value => {
                return FilmModel.findOne({
                    where: {
                        name: value
                    }
                }).then((element) => {
                    if (element !== null) {
                        return Promise.reject(ErrorCode.FILM_NAME_DUPLICATE)
                    }
                })
            }),
        body('type_id')
            .exists().withMessage(ErrorCode.FIELD_REQUIRE)
            .isLength({ min: 1 })
            .isNumeric(),
        body('trailer')
            .exists().withMessage(ErrorCode.FIELD_REQUIRE)
            .isLength({ min: 1 })
            .escape(),
        body('actor')
            .exists().withMessage(ErrorCode.FIELD_REQUIRE)
            .isLength({ min: 1 })
            .escape(),
        body('description')
            .escape()
    ]
}

let AdminUpdateFilm = () => {
    return [
        param('id')
            .isNumeric(),
        body('name')
            .exists()
            .isLength({ min: 1 })
            .escape()
            .custom((value, { req }) => {
                return FilmModel.findOne({
                    where: {
                        name: value,
                        [Op.not]: [
                            {
                                id: req.params.id
                            }
                        ]
                    }
                }).then((element) => {
                    if (element !== null) {
                        return Promise.reject(ErrorCode.FILM_NAME_DUPLICATE)
                    }
                })
            }),
        body('trailer')
            .exists()
            .isLength({ min: 1 })
            .escape(),
        body('actor')
            .exists()
            .isLength({ min: 1 })
            .escape(),
        body('description')
            .escape()
    ]
}

module.exports = {
    AdminLoginValidate,
    AdminShowFilm,
    AdminSearchFilm,
    AdminDeleteFilm,
    AdminShowType,
    AdminDeleteType,
    AdminCreateType,
    AdminUpdateType,
    AdminDeleteUser,
    AdminShowUser,
    AdminCreateFilm,
    AdminUpdateFilm
}
