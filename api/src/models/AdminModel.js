const { DataTypes, Model } = require('sequelize')
const bcrypt = require('bcrypt')
const { SALT_ROUND } = require('../constant/authConstant')

const options = require('./configs/options')
const TableName = 'admins'

class Admin extends Model {
}

let AdminModel = Admin.init({
    email: DataTypes.TEXT,
    password: {
        type: DataTypes.TEXT
    }
}, {
    ...options(TableName),
    hooks: {
        beforeCreate: (admin, options) => {
            {
                admin.password = bcrypt.hashSync(admin.password, SALT_ROUND);
            }
        }
    }
});

module.exports = AdminModel