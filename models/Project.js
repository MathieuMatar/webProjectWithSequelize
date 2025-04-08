const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db-sequelize');
const moment = require("moment");

/**
 * Project model
 * - name: string, required
 * - description: string, optional
 * - client_id: integer, optional, foreign key to Clients
 * - start_date: date, optional, defaults to current date
 * - deadline: date, optional, defaults to current date
 * - status: enum ['Upcoming', 'Pending', 'In Progress', 'Completed'], defaults to 'Pending'
 * - overview: string, optional
 * - files: string, optional
 */

class Project extends Model {}

Project.init(
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
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Clients',
                key: 'id',
            },
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: moment().format('YYYY-MM-DD'),
        },
        deadline: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: moment().format('YYYY-MM-DD'),
        },
        status: {
            type: DataTypes.ENUM('Upcoming','Pending', 'In Progress', 'Completed'),
            allowNull: true,
            defaultValue: 'Pending',
        },
        overview: {
            type: DataTypes.STRING(800),
            allowNull: true,
        },
        files: {
            type: DataTypes.STRING(800),
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Project',
        tableName: 'projects',
        timestamps: true,
    }
);

module.exports = Project;