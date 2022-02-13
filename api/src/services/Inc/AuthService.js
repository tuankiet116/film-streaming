const JWT = require('jsonwebtoken')
require('dotenv').config()

let checkAuth = (token) => {
    let payload = JWT.decode(token)
}

let tokenGeneration = (payload, expiresIn = null) => {
    var options = {}
    if (expiresIn) {
        options.expiresIn = expiresIn
    }

    return JWT.sign(payload, process.env.SECRET_KEY, options)
}

let checkToken = (token) => {
    payload = JWT.verify(token, process.env.SECRET_KEY)

    if (payload.exp) {
        if (payload.exp < Date.now()) {
            return payload
        }

        return false
    }

    return payload
}

module.exports = {
    checkAuth: checkAuth,
    genToken: tokenGeneration,
    checkToken: checkToken
}