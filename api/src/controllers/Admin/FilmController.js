const FilmService = require('../../services/Admin/FilmService')
const ResHelper = require('../../helpers/response')
const ErrorCode = require('../../constant/errorCodeConstant')
const ResCode = require('../../constant/responseConstant')
const { matchedData } = require('express-validator')

let FilmController = {}

FilmController.list = async (req, res) => {
    try {
        let data = await FilmService.list(parseInt(req.query.page))

        ResHelper.ApiResponse(data, ResCode.SUCCESS, res)
    }
    catch (err) {
        ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

FilmController.show = async (req, res) => {
    try {
        let filmId = req.params.id
        let data = await FilmService.show(filmId)

        ResHelper.ApiResponse(data, ResCode.SUCCESS, res)
    }
    catch (err) {
        ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

FilmController.search = async (req, res) => {
    try {
        let partern = req.query.partern
        let page = req.query.page

        let data = await FilmService.search(partern, page)

        ResHelper.ApiResponse(data, ResCode.SUCCESS, res)
    }
    catch (err) {
        ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

FilmController.deleteAction = async (req, res) => {
    try {
        let filmId = req.params.id
        let result = await FilmService.deleteAction(filmId)
        ResHelper.ApiResponse(result, ResCode.SUCCESS, res)
    }
    catch (err) {
        ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

FilmController.create = async (req, res) => {
    try {
        if (!req.files || !req.files.source || !req.files.profile) {
            return ResHelper.ApiResponse(ErrorCode.FILE_REQUIRED, ResCode.FAIL, res)
        }
        let data = matchedData(req)
        data.source = req.files.source[0].filename
        data.image = req.files.profile[0].filename
        let result = await FilmService.create(data)
        ResHelper.ApiResponse(result, ResCode.SUCCESS, res)
    }
    catch (err) {
        ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

FilmController.update = async (req, res) => {
    try {
        let data = matchedData(req)
        let id = data.id
        delete data.id

        if(req.files.source) {
            data.source = req.files.source[0].filename
        }

        if(req.files.profile) {
            data.image = req.files.profile[0].filename
        }

        let result = await FilmService.update(id, data)

        ResHelper.ApiResponse(result, ResCode.SUCCESS, res)
    }
    catch (err) {
        console.log(err)
        ResHelper.ApiResponse(err.message, ResCode.FAIL, res)
    }
}

module.exports = FilmController