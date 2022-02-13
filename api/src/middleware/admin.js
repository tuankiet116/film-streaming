const authHelper = require('../services/Inc/AuthService')
const responseHelper = require('../helpers/response')
const constantRes = require('../constant/responseConstant')
const { validationResult } = require('express-validator')

let checkValidateError = (req, res) => {
    let errors = validationResult(req)

    if (!errors.isEmpty()) {
        responseHelper.ApiResponse(errors, constantRes.FAIL, res)
        return true
    }

    return false
}

let checkAuthIsAdmin = (req, res, next) => {
    if (checkValidateError(req, res)) return

    let parternBearer = /^Bearer\s+/
    var token = req.headers.authorization

    if (token != null) {
        if (!parternBearer.test(token)) {
            return responseHelper.ApiResponse(null, constantRes.UNAUTHORIZED, res)
        }
        token = token.replace(/^Bearer\s+/, "")
        let payload = authHelper.checkToken(token)

        if (payload !== false) {
            return next()
        }
    }

    responseHelper.ApiResponse(null, constantRes.UNAUTHORIZED, res)
}

let handleValidatorErr = (req, res, next) => {
    if (checkValidateError(req, res)) return

    return next()
}

module.exports = {
    checkAuthIsAdmin,
    handleValidatorErr
}