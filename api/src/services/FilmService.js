const Film = require('../models/FilmModel')
const Type = require('../models/TypeModel')
const { paginateStart, page } = require('../helpers/pagination')
const { LIMIT, ACTIVE, INACTIVE, PAGE_DEFAULT } = require('../constant/constant')
const { Op } = require('sequelize')

let filmsByType = async (typeID, offset = null) => {
    let films = []
    
    await Film.findAndCountAll({
        raw: true,
        where: {
            'type_id': typeID,
            'active': ACTIVE
        },
        limit: LIMIT,
        offset: paginateStart(offset),
        order: [
            ['createdAt', 'DESC']
        ]
    }).then((elements) => {
        films = elements
    })

    return films
}

let listByTypes = async (req, res) => {
    let types = [];

    await Type.findAll({
        raw: true,
        where: {
            active: ACTIVE
        }
    }).then(async (elements) => {
        for (var element of elements) {
            element.films = await filmsByType(element.id)
            types.push(element)
        }
    })

    return types
}

let filmDetailInfo = async (req, res) => {
    const query = req.params

    if (query.id == null || query.id == '') {
        return null
    }

    let film = await Film.findOne({
        where: {
            id: query.id,
            active: ACTIVE
        }
    })

    return film
}

let search = async (partern, page) => {
    page = page ? page : PAGE_DEFAULT
    partern = partern ? partern : ""
    let films = []
    
    try {
        await Film.findAndCountAll({
            where: {
                name: {
                    [Op.substring]: '%' + partern + '%'
                },
                active: ACTIVE
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
    catch (err) {
        
        throw new Error(err.message)
    }

    return films
}

module.exports = {
    filmByType: filmsByType,
    listByType: listByTypes,
    filmDetail: filmDetailInfo,
    search: search
}