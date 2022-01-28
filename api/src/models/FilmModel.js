const { DataTypes, Model } = require('sequelize')
const options = require('./configs/options')

const TableName = 'films'

let Film = class extends Model{
    //your code in here
}

let FilmModel = Film.init({
    name: DataTypes.STRING(255),
    type_id: DataTypes.INTEGER,
    source: DataTypes.TEXT,
    actor: DataTypes.TEXT,
    trailer: DataTypes.TEXT,
    image: DataTypes.STRING(255),
    description: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
},{
    ...options(TableName)
})

module.exports = FilmModel