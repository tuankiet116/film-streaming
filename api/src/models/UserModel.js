const { DataTypes, Model } = require('sequelize')
const bcrypt = require('bcrypt')
const { SALT_ROUND } = require('../constant/authConstant')

const options = require('./configs/options')
const TableName = 'users'

class User extends Model {
}

let UserModel = User.init({
    email: DataTypes.TEXT,
    password: {
        type: DataTypes.TEXT
    },
    active: DataTypes.BOOLEAN,
}, {
    ...options(TableName),
    hooks: {
        beforeCreate: (user, options) => {
            {
                user.password = bcrypt.hashSync(user.password, SALT_ROUND);
            }
        }
    }
});

module.exports = UserModel