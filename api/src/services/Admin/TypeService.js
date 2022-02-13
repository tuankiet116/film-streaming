const Type = require('../../models/TypeModel')
const Film = require('../../models/FilmModel')
const { PAGE_DEFAULT, LIMIT } = require('../../constant/constant')
const { paginateStart } = require('../../helpers/pagination')
const { Op } = require('sequelize')
const ErrorCodeConstant = require('../../constant/errorCodeConstant')
const CustomError = require('../../Errors/BaseErrorHandle')

let list = async (page) => {
    page = page ? page : PAGE_DEFAULT
    let result = await Type.findAndCountAll({
        limit: LIMIT,
        offset: paginateStart(page),
        order: [
            ['createdAt', 'DESC']
        ]
    })

    return result
}

let update = async (id, data) => {
    try {
        let result = await Type.update(data, {
            where: {
                id: id
            }
        })
        
        return result
    }
    catch (err) {
        throw new CustomError({
            msg: error.massage,
            id: null
        })
    }
}

let create = async (data) => {
    try {
        let result = await Type.create(data)
        return result
    }
    catch (err) {
        throw new CustomError({
            msg: error.massage,
            id: null
        })
    }
}

let deleteAction = async (id) => {
    let countFilm = await Film.count({
        where: {
            type_id: id
        }
    })

    if (countFilm) {
        throw new CustomError(ErrorCodeConstant.RELATED_TABLE_ERROR)
    }

    return await Type.destroy({
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
            msg: error.massage,
            id: null
        })
    })
}

let show = async (id) => {
    return await Type.findByPk(id)
}

module.exports = { list, update, create, deleteAction, show }