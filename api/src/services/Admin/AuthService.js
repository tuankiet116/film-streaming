const AdminModel = require('../../models/AdminModel')
const bcrypt = require('bcrypt')
const ErrorTypeConstant = require('../../constant/errorTypeConstant')
const AuthHelper = require('../Inc/AuthService')
const { EXPIRES_IN } = require('../../constant/authConstant')

module.exports.login = async (adminEmail, password, rememberMe = false) => {
    try {
        var token = null;

        await AdminModel.findOne({
            where: {
                email: adminEmail
            }
        }).then(async (element) => {
            if (element == null) throw new Error(ErrorTypeConstant.AUTHENTICATION_FAILED)

            let result = await bcrypt.compare(password, element.password)

            if (!result) throw new Error(ErrorTypeConstant.AUTHENTICATION_FAILED)

            let payload = {
                AdminID: element.id,
                AdminEmail: element.email
            }

            token = AuthHelper.genToken(payload, rememberMe ? null : EXPIRES_IN)
        })

        return token
    }
    catch (error) {
        throw new Error(error)
    }
}