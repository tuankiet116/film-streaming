const TypeService = require('../services/TypeService')
const resHelper = require('../helpers/response')
const responseCode = require('../constant/responseConstant')
const TypeController = {}

TypeController.list = async (req, res) => {

    let types = []
    try {
        types = await TypeService.listTypes()
    }
    catch (err) {
        return resHelper.ApiResponse(err, responseCode.FAIL, res)
    }

    return resHelper.ApiResponse(types, responseCode.SUCCESS, res)
}

TypeController.detail = async (req, res) => {
    let types = null
    try {
        types = await TypeService.getTypeInfor(req.params.typeID)
    }
    catch (err) {
        return resHelper.ApiResponse(err, responseCode.FAIL, res)
    }

    return resHelper.ApiResponse(types, responseCode.SUCCESS, res)
}

module.exports = TypeController