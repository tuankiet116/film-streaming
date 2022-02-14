const multer = require('multer');
const ResHelper = require('../../helpers/response')
const ErrorCode = require('../../constant/errorCodeConstant')
const ResCode = require('../../constant/responseConstant')

const whitelistProfile = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
]

const whitelistVideo = [
    'video/mp4'
]

module.exports.AdminUploadMovie = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            if (file.fieldname == 'source') {
                return cb(null, __dirname + '/../../../data/sources') 
            }
            return cb(null, __dirname + '/../../../data/profiles')
        },
        filename: (req, file, cb) => {
            if(file.fieldname == 'source'){
                return cb(null, `${new Date().getTime()}.mp4`)
            }
            return cb(null, `${new Date().getTime()}.png`)
        },
    }),
    fileFilter: (req, file, cb) => {
        if (file.fieldname == 'source') {
            if (!whitelistVideo.includes(file.mimetype)) {
                cb(new Error('Video is not allowed'), false)
                return ResHelper.ApiResponse(ErrorCode.VIDIEO_WRONG, ResCode.FAIL, req.res)
            }
            return cb(null, true)
        }
        
        if (!whitelistProfile.includes(file.mimetype)) {
            cb(new Error('Profile is not allowed'))
            return ResHelper.ApiResponse(ErrorCode.PROFILE_WRONG, ResCode.FAIL, req.res)
        }
        return cb(null, true)
    }
})