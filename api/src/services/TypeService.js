let TypeModel = require('../models/TypeModel')
let { ACTIVE } = require('../constant/constant')

let listTypes = async () => {
    let results = await TypeModel.findAll({
        where: {
            active: ACTIVE
        },
        order: [
            ['createdAt', 'DESC']
        ]
    })

    return results
}

let getTypeInfor = async (typeID) => {
    return await TypeModel.findOne({
        where: {
            id: typeID,
            active: ACTIVE
        }
    })
}

module.exports = {
    listTypes,
    getTypeInfor
}