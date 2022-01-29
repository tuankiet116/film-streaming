const express = require('express')
const filmService = require('../services/filmService')
const resHelper = require('../helpers/response')
const responseCode = require('../constant/responseConstant')
const filmController = {}

filmController.list = async (req, res) => {
    try {
        let films = await filmService.list(req, res)
        if (!films.length) {
            resHelper.ApiResponse(films, responseCode.NOT_FOUND, res)
        }
        resHelper.ApiResponse(films, responseCode.SUCCESS, res)
    }
    catch (error) {
        resHelper.ApiResponse(error, responseCode.FAIL, res)
    }
}

filmController.listByType = async (req, res) => {
    try {
        let types = await filmService.listByType(req, res)
        if (!types.length) {
            resHelper.ApiResponse(types, responseCode.NOT_FOUND, res)
        }
        resHelper.ApiResponse(types, responseCode.SUCCESS, res)
    }
    catch (error) {
        resHelper.ApiResponse(error, responseCode.FAIL, res)
    }
}

filmController.detail = async (req, res) => {
    try {
        let film = await filmService.filmDetail(req, res)
        if (!film) {
            resHelper.ApiResponse(film, responseCode.NOT_FOUND, res)
        }
        resHelper.ApiResponse(film, responseCode.SUCCESS, res)
    }
    catch (error) {
        resHelper.ApiResponse(error, responseCode.FAIL, res)
    }
}

module.exports = filmController