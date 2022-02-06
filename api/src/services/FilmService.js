const Film = require('../models/FilmModel')
const Type = require('../models/TypeModel')
const { paginateStart } = require('../helpers/pagination')
const { LIMIT, ACTIVE, INACTIVE } = require('../constant/constant')

let list = async (req, res) => {
    const query = req.query
    let films = []
    await Film.findAll({
        raw: true,
        limit: LIMIT,
        offset: paginateStart(query.page),
        where: {
            active: ACTIVE
        }
    }).then((elements) => {
        elements.forEach((element) => {
            films.push(element)
        });
    })

    return films;
}

let filmsByType = async (type, offset = null) => {
    let films = []

    await Film.findAll({
        raw: true,
        where: {
            'type_id': type.id
        },
        limit: LIMIT,
        offset: paginateStart(offset),
        order: [
            ['createdAt', 'DESC']
        ]
    }).then((elements) => {
        elements.forEach((element) => {
            films.push(element)
        });
    })

    return films
}

let listByTypes = async (req, res) => {
    const query = req.query
    let types = [];

    Type.hasMany(Film)
    await Type.findAll({
        raw: true,
        where: {
            active: ACTIVE
        }
    }).then(async (elements) => {
        for (var element of elements) {
            element.films = await filmsByType(element, query.page)
            types.push(element)
        }
    })

    return types
}

let filmDetailInfo = async (req, res) => {
    const query = req.query

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

module.exports = {
    list: list,
    listByType: listByTypes,
    filmDetail: filmDetailInfo
}