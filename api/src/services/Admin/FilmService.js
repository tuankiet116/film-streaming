const FilmModel = require('../../models/FilmModel')
const CustomError = require('../../Errors/BaseErrorHandle')
const { LIMIT, PAGE_DEFAULT } = require('../../constant/constant')
const { paginateStart } = require('../../helpers/pagination')
const { Op } = require('sequelize')

let list = async (page) => {
    page = page ? page : PAGE_DEFAULT

    let results = await FilmModel.findAndCountAll({
        limit: LIMIT,
        offset: paginateStart(page),
        order: [
            ['createdAt', 'DESC']
        ]
    })

    return results
}

let update = async (id, data) => {
    try {
        let result = await FilmModel.update(data, {
            where: {
                id: id
            }
        })
        
        return result
    }
    catch (error) {
        throw new CustomError({
            msg: error.message,
            id: null
        })
    }
}

let create = async (data) => {
    try{
        return await FilmModel.create(data)
    }
    catch(error){
        throw new CustomError({
            msg: error.message,
            id: null
        })
    }
}

let show = async (id) => {
    return await FilmModel.findByPk(id)
}

let deleteAction = async (id) => {
    return await FilmModel.destroy({
        where: {
            id: id
        }
    }).then((count) => {
        if (!count) {
            return false
        }
        return true
    }).catch((error) => {
        throw new CustomError({
            msg: error.message,
            id: null
        })
    })
}

let search = async (partern, page) => {
    page = page ? page : PAGE_DEFAULT
    partern = partern ? partern : ""
    let films = []

    try {
        await FilmModel.findAndCountAll({
            where: {
                name: {
                    [Op.substring]: '%' + partern + '%'
                }
            },
            limit: LIMIT,
            offset: paginateStart(page),
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(results => {
            films = results
        });
    }
    catch (error) {
        throw new CustomError({
            msg: error.message,
            id: null
        })
    }

    return films
}

module.exports = { list, update, deleteAction, search, create, show }