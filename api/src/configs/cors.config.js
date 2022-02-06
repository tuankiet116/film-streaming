const cors = require('cors')
const dotenv = require('dotenv') 
dotenv.config()

let whiteList = process.env.CORS_URL
module.exports = cors({
    origin: whiteList
});