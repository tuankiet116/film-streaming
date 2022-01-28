const { DataTypes, Model } = require('sequelize')
const options = require('./configs/options')
const FilmModel = require('./FilmModel')
const TableName = 'types'

let Type = class extends Model{
    
}

let TypeModel = Type.init({
    name: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
},{
    ...options(TableName)
})

module.exports = TypeModel