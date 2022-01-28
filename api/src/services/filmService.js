const Film = require('../models/FilmModel')
const Type = require('../models/TypeModel')
const { paginateStart } = require('../helpers/pagination')
const { LIMIT } = require('../constant/constant')

let list = async (req, res) => {
    const query = req.query
    let films = []
    await Film.findAll({
        raw: true,
        limit: LIMIT,
        offset: paginateStart(query.page, LIMIT),
        where: {
            active: 1
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
        offset: paginateStart(offset, LIMIT)
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
    
    await Type.findAll({
        raw: true,
        where: {
            active: 1
        }
    }).then(async (elements) => {
        for (var element of elements){
            element.films = await filmsByType(element, query.page)
            types.push(element)
        }
    })
    
    return types
}

module.exports = {
    list: list,
    listByType: listByTypes
}