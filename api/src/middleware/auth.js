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

let checkAuth = (req, res, next) => {
    if (checkValidateError(req, res)) return

    var token = req.headers.authorization
    if (token !== null) {
        token = token.replace(/^Bearer\s+/, "")
        let payload = authHelper.checkToken(token)

        if (payload !== false) {
            next()
            return
        }
    }

    responseHelper.ApiResponse(null, constantRes.UNAUTHORIZED, res)
}

let checkAuthLoged = (req, res, next) => {
    if (checkValidateError(req, res)) return

    let token = req.headers.authorization

    if (token == null) {
        next()
        return
    }
    else {
        let payload = authHelper.checkToken(token.replace(/^Bearer\s+/, ""))
        if (payload === false) {
            next()
            return
        }
    }

    responseHelper.ApiResponse(null, constantRes.REDIRECT, res)
}

module.exports = {
    authMiddleWare: checkAuth,
    loginMiddleWare: checkAuthLoged
}