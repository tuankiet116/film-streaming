const { param, header } = require('express-validator')
const ErrorCode = require('../constant/errorCodeConstant')

let checkStream = () => {
    return [
        header('range')
            .exists().withMessage(ErrorCode.RANGE_FAILED),
        param('id')
            .exists().withMessage(ErrorCode.FILM_NOT_FOUND)
            .isNumeric()
    ]
}

let filmDetail = () => {
    return [
        param('id')
            .exists().withMessage(ErrorCode.FILM_NOT_FOUND)
            .isNumeric()
    ]
}

module.exports = { checkStream, filmDetail }