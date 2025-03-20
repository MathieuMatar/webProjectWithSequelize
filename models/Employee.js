const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db-sequelize');
const moment = require("moment");

class Employee extends Model {}

Employee.init(
    {
        /*employee_id: {
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