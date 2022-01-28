module.exports.paginateStart = (currentPage, limit) => {
    if (currentPage == null || currentPage < 0)
        return null
    return (currentPage - 1) * limit
}