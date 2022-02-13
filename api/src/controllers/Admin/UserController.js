const UserService = require('../../services/Admin/UserService')
const ResHelper = require('../../helpers/response')
const ResCode = require('../../constant/responseConstant')
const ErrorCode = require('../../constant/errorCodeConstant')
const { matchedData } = require('express-validator')

let UserController = {}

UserController.list = async (req, res) => {
    try {
        let data = await UserService.list(parseInt(req.query.page))

        ResHelper.ApiResponse(data, ResCode.SUCCESS, res)
    }
    catch (err) {
        ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

UserController.show = async (req, res) => {
    try {
        let typeID = req.params.id
        let data = await UserService.show(typeID)

        ResHelper.ApiResponse(data, ResCode.SUCCESS, res)
    }
    catch (err) {
        ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

UserController.deleteAction = async (req, res) => {
    try{
        let typeID = req.params.id
        let result = await UserService.deleteAction(typeID)
        ResHelper.ApiResponse(result, ResCode.SUCCESS, res)
    }
    catch(err){
        if(err.status == ErrorCode.RELATED_TABLE_ERROR.id) {
            return ResHelper.ApiResponse(err, ResCode.FAIL, res)
        }
        return ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

module.exports = UserController