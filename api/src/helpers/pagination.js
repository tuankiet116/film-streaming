const { LIMIT } = require('../constant/constant')

module.exports.paginateStart = (currentPage, limit = null) => {
    if (currentPage == null || currentPage < 0)
        return null
    var limit = limit ? limit : LIMIT
    return (currentPage - 1) * limit
}