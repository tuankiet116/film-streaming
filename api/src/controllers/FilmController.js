const FilmService = require('../services/FilmService')
const resHelper = require('../helpers/response')
const responseCode = require('../constant/responseConstant')
const fs = require('fs')
const filmController = {}

filmController.listByTypeID = async (req, res) => {
    let typeID = req.params.typeID

    try {
        let films = await FilmService.filmByType(typeID, req.query.page ? req.query.page : null)
        if (!films) {
            resHelper.ApiResponse(films, responseCode.NOT_FOUND, res)
        }
        resHelper.ApiResponse(films, responseCode.SUCCESS, res)
    }
    catch (error) {
        resHelper.ApiResponse(error.message, responseCode.FAIL, res)
    }
}

filmController.listByType = async (req, res) => {
    try {
        let types = await FilmService.listByType(req, res)
        if (!types) {
            resHelper.ApiResponse(types, responseCode.NOT_FOUND, res)
        }
        resHelper.ApiResponse(types, responseCode.SUCCESS, res)
    }
    catch (error) {
        resHelper.ApiResponse(error, responseCode.FAIL, res)
    }
}

filmController.detail = async (req, res) => {
    try {
        let film = await FilmService.filmDetail(req, res)

        if (!film) {
            resHelper.ApiResponse(film, responseCode.NOT_FOUND, res)
        }
        resHelper.ApiResponse(film, responseCode.SUCCESS, res)
    }
    catch (error) {
        resHelper.ApiResponse(error, responseCode.FAIL, res)
    }
}

filmController.stream = async (req, res, next) => {
    try {

        let film = await FilmService.filmDetail(req, res)
        if (!film) {
            resHelper.ApiResponse(film, responseCode.NOT_FOUND, res)
            return
        }

        let file = __dirname + "/../../data/sources/" + film.source

        fs.stat(file, function (err, stats) {
            if (err) {
                if (err.code === 'ENOENT') {
                    return res.sendStatus(404);
                }

                return next(err)
            }
            let range = req.headers.range;

            let positions = range.replace(/bytes=/, '').split('-');

            let start = parseInt(positions[0], 10);

            let file_size = stats.size;

            let end = positions[1] ? parseInt(positions[1], 10) : file_size - 1;

            let chunksize = (end - start) + 1;

            let head = {
                'Content-Range': 'bytes ' + start + '-' + end + '/' + file_size,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': 'video/mp4'
            }

            res.writeHead(206, head);

            let stream_position = {
                start: start,
                end: end
            }


            let stream = fs.createReadStream(file, stream_position)

            stream.on('open', function () {
                stream.pipe(res);
            })

            stream.on('error', function (err) {
                return next(err);
            });
        })
    }
    catch (error) {
        resHelper.ApiResponse(error.message, responseCode.FAIL, res)
    }
}

filmController.search = async (req, res) => {
    let partern = req.query.partern
    let page = parseInt(req.query.page)
    
    try {
        films = await FilmService.search(partern, page);

        resHelper.ApiResponse(films, responseCode.SUCCESS, res)
    }
    catch (err) {
        resHelper.ApiResponse(err.message, responseCode.FAIL, res)
    }
}

module.exports = filmController