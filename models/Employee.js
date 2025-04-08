const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db-sequelize');
const moment = require("moment");

/**
 * Employee model
 * - name: string, required
 * - password: string, required
 * - first_name: string, required
 * - father_name: string, optional
 * - last_name: string, required
 * - position: string, optional
 * - email: string, optional, must be a valid email
 * - phone: string, optional
 * - hire_date: date, optional, defaults to current date
 * - info: string, optional
 */

class Employee extends Model {}

Employee.init(
    {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        father_name: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        position: {
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
        hire_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            get() {
                return moment(this.getDataValue('hire_date')).format('YYYY-MM-DD');
            },
        },
        info: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Employee',
        tableName: 'employees',
        timestamps: true,
    }
);

module.exports = Employee;