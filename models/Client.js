const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db-sequelize');
const moment = require("moment");

class Client extends Model {}

Client.init(
    {
      /*  client_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },*/
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
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
            validate: {
                len: [10, 20],
            },
        },
        address: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        client_type: {
            type: DataTypes.ENUM(
                'Corporate',
                'Hospitality',
                'Religious',
                'Retail',
                'NonProfit',
                'Startup',
                'ECommerce',
                'Healthcare',
                'PersonalBrand'
            ),
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Client',
        tableName: 'clients',
        timestamps: true,
    }
);

module.exports = Client;