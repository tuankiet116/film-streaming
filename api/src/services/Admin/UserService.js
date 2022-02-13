const UserModel = require('../../models/UserModel')
const { LIMIT, PAGE_DEFAULT } = require('../../constant/constant')
const { paginateStart } = require('../../helpers/pagination')

let list = async (page) => {
    page = page ? page : PAGE_DEFAULT
    let result = await UserModel.findAndCountAll({
        limit: LIMIT,
        offset: paginateStart(page),
        order: [
            ['createdAt', 'DESC']
        ]
    })

    return result
}

let deleteAction = async (id) => {
    return await UserModel.destroy({
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
    return await UserModel.findByPk(id)
}

module.exports = { show, list, deleteAction }