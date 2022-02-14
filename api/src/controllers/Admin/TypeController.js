const TypeService = require('../../services/Admin/TypeService')
const ResHelper = require('../../helpers/response')
const ResCode = require('../../constant/responseConstant')
const ErrorCode = require('../../constant/errorCodeConstant')
const { matchedData } = require('express-validator')

let TypeController = {}

TypeController.list = async (req, res) => {
    try {
        let data = await TypeService.list(parseInt(req.query.page))

        ResHelper.ApiResponse(data, ResCode.SUCCESS, res)
    }
    catch (err) {
        ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

TypeController.show = async (req, res) => {
    try {
        let typeID = req.params.id
        let data = await TypeService.show(typeID)

        ResHelper.ApiResponse(data, ResCode.SUCCESS, res)
    }
    catch (err) {
        ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

TypeController.deleteAction = async (req, res) => {
    try{
        let typeID = req.params.id
        let result = await TypeService.deleteAction(typeID)
        ResHelper.ApiResponse(result, ResCode.SUCCESS, res)
    }
    catch(err){
        if(err.status == ErrorCode.RELATED_TABLE_ERROR.id) {
            return ResHelper.ApiResponse(err, ResCode.FAIL, res)
        }
        return ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

TypeController.create = async (req, res) => {
    try {
        let data = matchedData(req)

        let result = await TypeService.create(data)

        ResHelper.ApiResponse(result, ResCode.SUCCESS, res)
    }
    catch (err) {
        ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

TypeController.update = async (req, res) => {
    try {
        let data = matchedData(req)
        
        let typeID = data.id
        delete data.id

        let result = await TypeService.update(typeID, data)

        ResHelper.ApiResponse(result, ResCode.SUCCESS, res)
    }
    catch (err) {
        ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

module.exports = TypeController