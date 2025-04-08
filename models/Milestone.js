const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db-sequelize');
const moment = require("moment");

/**
 * Milestone model
 * - project_id: integer, required, foreign key to Projects
 * - name: string, required
 * - description: string, optional
 * - date: date, optional, defaults to current date
 * - due_date: date, optional, defaults to current date
 * - status: enum ['Pending', 'In Progress', 'Completed'], defaults to 'Pending'
 */

class Milestone extends Model {}

Milestone.init(
    {
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'projects',
                key: 'id',
            },
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: moment().format('YYYY-MM-DD'),
        },
        due_date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: moment().format('YYYY-MM-DD'),
        },
        status: {
            type: DataTypes.ENUM('Pending', 'In Progress', 'Completed'),
            allowNull: true,
            defaultValue: 'Pending',
        },
    },
    {
        sequelize,
        modelName: 'Milestone',
        tableName: 'milestones',
        timestamps: true,
    }
);

module.exports = Milestone;