const express = require('express')
const filmService = require('../services/filmService')
const filmController = {}

filmController.list = async (req, res) => {
    try{
        let films = await filmService.list(req, res)
        res.json(films)
    }
    catch(error){
        console.log(error)
    }
}

filmController.listByType = async (req, res) => {
    try{
        let films = await filmService.listByType(req, res)
        res.json(films)
    }
    catch(error){
        console.log(error)
    }
}

filmController.detail = async (req, res) => {
    
}

module.exports = filmController