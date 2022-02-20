const UserModel = require('../models/UserModel')
const ERROR_TYPE = require('../constant/errorTypeConstant')
const AuthHelper = require('./Inc/AuthService')
const { EXPIRES_IN } = require('../constant/authConstant')
const bcrypt = require('bcrypt')

module.exports.login = async (userEmail, password, rememberMe = false) => {
    try {
        var token = null;

        await UserModel.findOne({
            where: {
                email: userEmail
            }
        }).then(async (element) => {
            if (element == null || !result) {
                throw new Error(ERROR_TYPE.AUTHENTICATION_FAILED)
            }
            let result = await bcrypt.compare(password, element.password)
            
            let payload = {
                userID: element.id,
                userEmail: element.email
            }

            token = AuthHelper.genToken(payload, rememberMe ? null : EXPIRES_IN)
        })

        return token
    }
    catch (error) {
        throw new Error(error)
    }
}

module.exports.register = async (userEmail, password) => {
    try {
        var token = null;

        await UserModel.create({
            email: userEmail,
            password: password
        }).then((element) => {
            if (element) {
                let payload = {
                    userID: element.id,
                    userEmail: element.email
                }

                token = AuthHelper.genToken(payload, EXPIRES_IN)
            }
        })

        return token
    }
    catch (error) {
        throw new Error(error)
    }
} 