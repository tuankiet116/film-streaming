const dotenv = require('dotenv')
const { Sequelize } = require('sequelize')
dotenv.config()

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});