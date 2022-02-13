const AdminAuthService = require('../../services/Admin/AuthService')
const ResHelper = require('../../helpers/response')
const ResType = require('../../constant/errorTypeConstant')
const ResCode = require('../../constant/responseConstant')

let AuthController = {}

AuthController.login = async (req, res) => {
    try {
        let body = req.body

        let token = await AdminAuthService.login(body.email, body.password, body.rememberMe)
        let data = {
            token: token
        }

        if (!token) {
            ResHelper.ApiResponse(null, ResCode.UNAUTHORIZED, res)
        }

        ResHelper.ApiResponse(data, ResCode.SUCCESS, res)
    }
    catch (err){
        ResHelper.ApiResponse(err.message, ResCode.UNAUTHORIZED, res)
    }
    
}

module.exports = AuthController