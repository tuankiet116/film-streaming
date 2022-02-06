const userService = require('../services/UserService')
const resHelper = require('../helpers/response')
const { FAIL, SUCCESS } = require('../constant/responseConstant')
const UserController = {}

UserController.login = async (req, res) => {
    try {
        let userEmail = req.body.email
        let password = req.body.password
        let rememberMe = req.body.rememberMe ? true : false

        let token = await userService.login(userEmail, password, rememberMe)

        let data = {
            token: token
        }

        return resHelper.ApiResponse(data, SUCCESS, res)
    }
    catch (error) {
        resHelper.ApiResponse(error.message, FAIL, res)
    }
}

UserController.register = async (req, res) => {
    try {
        let userEmail = req.body.email
        let password = req.body.password

        let token = await userService.register(userEmail, password)

        return resHelper.ApiResponse(token, SUCCESS, res)
    }
    catch (error) {
        resHelper.ApiResponse(error.message, FAIL, res)
    }
}

module.exports = UserController