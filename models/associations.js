
const sequelize = require('../config/db-sequelize');
const Project = require('./Project');
const Employee = require('./Employee');
const Contact = require('./Contact');
const Service = require('./Service');
const Milestone = require('./Milestone');
const Task = require('./Task');

//User.hasMany(Order, {foreignKey: 'user_id', onDelete: 'CASCADE'});
//Order.belongsTo(User, {foreignKey: 'user_id'});
Project.belongsToMany(Employee, { through: 'ProjectEmployee' });
Employee.belongsToMany(Project, { through: 'ProjectEmployee' });

//contact and project many to many
Contact.belongsToMany(Project, { through: 'ProjectContact' });
Project.belongsToMany(Contact, { through: 'ProjectContact' });

//projectservice
Project.belongsToMany(Service, { through: 'ProjectService' });
Service.belongsToMany(Project, { through: 'ProjectService' });


//milestoner belongs to project
Milestone.belongsTo(Project, { foreignKey: 'project_id' });
//project has many milestones
Project.hasMany(Milestone, { foreignKey: 'project_id' });


/**
 * Task model
 * - type: enum ['note', 'task'], required
 * - project_id: integer, optional, foreign key to Projects
 * - contact_assigned: integer, optional, foreign key to Contacts
 * - employee_assigned: integer, optional, foreign key to Employees
 * - contact_completed: integer, optional, foreign key to Contacts
 * - employee_completed: integer, optional, foreign key to Employees
 * - completed: enum ['Y', 'N', 'C'], required
 * - date: date, optional, defaults to current date
 * - due_date: date, optional, defaults to current date
 * - task_description: text, optional
 * - importance_level: enum ['Critical', 'High', 'Medium', 'Low', 'Optional'], optional
 */
//task belong to project
//task belong to employee
//task belong to contact

Task.belongsTo(Project, { foreignKey: 'project_id' });
Task.belongsTo(Employee, { foreignKey: 'employee_assigned' });
Task.belongsTo(Contact, { foreignKey: 'contact_assigned' });
Task.belongsTo(Employee, { foreignKey: 'employee_completed' });
Task.belongsTo(Contact, { foreignKey: 'contact_completed' });

//project has many tasks
Project.hasMany(Task, { foreignKey: 'project_id' });
//employee has many tasks
Employee.hasMany(Task, { foreignKey: 'employee_assigned' });
Employee.hasMany(Task, { foreignKey: 'employee_completed' });







const syncDB = async () => {
    await sequelize.sync({alter: true});

    console.log("All tables have been created");
}

//module.exports = {User, Order, syncDB, sequelize}
module.exports = { Project, Employee, Contact, Service, Milestone, Task, syncDB, sequelize }
