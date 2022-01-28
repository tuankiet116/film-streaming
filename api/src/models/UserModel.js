const { DataTypes, Model } = require('sequelize')
const options = require('./configs/options')
const TableName = 'users'

class User extends Model {
}

let UserModel = User.init({
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    active: DataTypes.BOOLEAN,
}, { 
    ...options(TableName)
});

module.exports = UserModel