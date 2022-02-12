const resHelper = require('../helpers/response')
const constantRes = require('../constant/responseConstant');
const ERROR_TYPE = require('../constant/errorTypeConstant');
const { validationResult } = require('express-validator')

let checkRange = (req, res, next) => {
    let errs = validationResult(req)

    if (errs.errors.length) {
        // if(errs.errors.find((value) => {
        //     return value.location == 'headers'
        // })){
        //     resHelper.ApiResponse(errs.errors, constantRes.RANGE_NOT_SATISFIABLE, res)
        // }

        resHelper.ApiResponse(errs.errors, constantRes.FAIL, res)
        return
    }
    
    next()
}



module.exports = checkRange