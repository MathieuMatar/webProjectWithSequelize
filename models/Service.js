const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db-sequelize');
const moment = require("moment");

/**
 * Service model
 * - name: string, required
 * - description: string, optional
 * - rate: decimal, optional
 * - duration: integer, optional
 * - status: enum ['Active', 'Inactive'], defaults to 'Active'
 */

class Service extends Model { }

Service.init(
    {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        rate: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('Active', 'Inactive'),
            allowNull: true,
            defaultValue: 'Active',
        },
    },
    {
        sequelize,
        modelName: 'Service',
        tableName: 'services',
        timestamps: true,
    }
);

module.exports = Service;