const sequelize = require('../../configs/dbconnection.config')
const { DataTypes, Model } = require('sequelize')

module.exports = (tableName) => {
    return {
        sequelize,
        underscored: true,
        tableName: tableName
    }
}