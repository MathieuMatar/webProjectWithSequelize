const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db-sequelize');
const moment = require("moment");

class Contact extends Model {}

Contact.init(
    {
        client_id: {
            //relationship to Client primary key
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Client',
                key: 'id',
            },
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        role: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: true,
            validate: {
                isEmail: true,
            },
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Contact',
        tableName: 'contacts',
        timestamps: true,
    }
);

module.exports = Contact;