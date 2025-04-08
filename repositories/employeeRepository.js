const { Project, Employee, Task } = require('../models/associations');

/**
 * The EmployeeRepository class handles database operations for the Employee model.
 *
 * @method readEmployees
 * @description Retrieves all employees.
 *
 * @method readEmployee
 * @param {number} id - The ID of the employee to retrieve.
 * @description Retrieves a single employee by ID.
 *
 * @method createEmployee
 * @param {string} name - The employee's username.
 * @param {string} password - The employee's password.
 * @param {string} first_name - The employee's first name.
 * @param {string} father_name - The employee's father's name.
 * @param {string} last_name - The employee's last name.
 * @param {string} position - The employee's position in the company.
 * @param {string} email - The employee's email address.
 * @param {string} phone - The employee's phone number.
 * @param {Date} hire_date - The employee's hire date.
 * @param {string} info - Additional information about the employee.
 * @description Creates a new employee.
 *
 * @method updateEmployee
 * @param {number} id - The employee's ID.
 * @param {string} name - The employee's username.
 * @param {string} password - The employee's password.
 * @param {string} first_name - The employee's first name.
 * @param {string} father_name - The employee's father's name.
 * @param {string} last_name - The employee's last name.
 * @param {string} position - The employee's position in the company.
 * @param {string} email - The employee's email address.
 * @param {string} phone - The employee's phone number.
 * @param {Date} hire_date - The employee's hire date.
 * @param {string} info - Additional information about the employee.
 * @description Updates an employee.
 *
 * @method deleteEmployee
 * @param {number} id - The employee's ID.
 * @description Removes an employee.
 */

class EmployeeRepository {
    static async readEmployees() {
        try {
            const employees = await Employee.findAll({
                include: [
                    { model: Project }
                ]
            });
            return employees;
        } catch (error) {
            console.error("Error reading employees:", error);
            return { success: false, message: "Failed to read employees." };
        }
    }

    static async readEmployee(id) {
        try {
            const employee = await Employee.findByPk(id,
                {
                    include: [
                        { model: Project },
                        { model: Task }
                    ]
                }
            );
            return employee;
        } catch (error) {
            console.error("Error reading employee:", error);
            return { success: false, message: "Failed to read employee." };
        }
    }

    static async createEmployee(name, password, first_name, father_name, last_name, position, email, phone, hire_date, info) {
        try {
            const createdEmployee = await Employee.create(
                { name, password, first_name, father_name, last_name, position, email, phone, hire_date, info }
            );
            return createdEmployee;
        } catch (error) {
            console.error("Error creating employee:", error);
            return { success: false, message: "Failed to create employee." };
        }
    }

    static async updateEmployee(id, name, password, first_name, father_name, last_name, position, email, phone, hire_date, info) {
        try {
            await Employee.update(
                { name, password, first_name, father_name, last_name, position, email, phone, hire_date, info },
                { where: { id } }
            );
            return { success: true, message: "Employee updated successfully." };
        } catch (error) {
            console.error("Error updating employee:", error);
            return { success: false, message: "Failed to update employee." };
        }
    }

    static async deleteEmployee(id) {
        try {
            const deleted = await Employee.destroy({ where: { id } });
            if (deleted === 0) {
                return { success: false, message: "No employee found to delete." };
            }
            return { success: true, message: "Employee deleted successfully." };
        } catch (error) {
            console.error("Error deleting employee:", error);
            return { success: false, message: "Failed to delete employee." };
        }
    }
}

module.exports = EmployeeRepository;