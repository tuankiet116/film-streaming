const { body } = require('express-validator')
const ErrorCode = require('../constant/errorCodeConstant')
const UserModel = require('../models/UserModel')

let UserLoginValidate = () => {
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

let UserRegisterValidate = () => {
    return [
        body('email')
            .exists().withMessage(ErrorCode.EMAIL_REQUIRED)
            .isEmail().withMessage(ErrorCode.INVALID_EMAIL)
            .custom(value => {
                return UserModel.findOne({
                    where: {
                        email: value
                    }
                }).then((element) => {
                    if (element !== null) {
                        return Promise.reject(ErrorCode.EMAIL_DUPLICATE)
                    }
                })
            }),

        body('password')
            .isLength({ min: 8, max: 32 }).withMessage(ErrorCode.PASSWORD_INVALID)
            .trim(),
    ]
}

module.exports = {
    UserLoginValidate,
    UserRegisterValidate
}
