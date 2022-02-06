const { response } = require('express')

module.exports.ApiResponse = (data, code, _response = null, status = null) => {
    let res = _response
    if (_response == null) {
        res = response
    }

    let dataResponse = {
        code: code,
        data: data
    }

    return res.status(status ? status : code).json(dataResponse).end()
}