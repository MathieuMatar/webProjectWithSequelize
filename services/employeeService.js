const EmployeeRepository = require('../repositories/employeeRepository');

/**
 * Provides employee-related operations.
 *
 * @method readEmployees
 * @returns {Promise<Object[]>} A promise resolving to a list of employees
 *
 * @method readEmployee
 * @param {number} id - Employee identifier
 * @returns {Promise<Object|null>} A promise resolving to the employee or null
 *
 * @method createEmployee
 * @param {string} name
 * @param {string} password
 * @param {string} first_name
 * @param {string} father_name
 * @param {string} last_name
 * @param {string} position
 * @param {string} email
 * @param {string} phone
 * @param {string} hire_date
 * @param {string} info
 * @returns {Promise<Object>} A promise resolving to the newly created employee
 *
 * @method updateEmployee
 * @param {number} id
 * @param {string} name
 * @param {string} password
 * @param {string} first_name
 * @param {string} father_name
 * @param {string} last_name
 * @param {string} position
 * @param {string} email
 * @param {string} phone
 * @param {string} hire_date
 * @param {string} info
 * @returns {Promise<Object>} A promise resolving to the updated employee
 *
 * @method deleteEmployee
 * @param {number} id - Employee identifier
 * @returns {Promise<void>} A promise resolving when deletion is complete
 */

class EmployeeService {
    static async readEmployees() {
        return await EmployeeRepository.readEmployees();
    }

    static async readEmployee(id) {
        return await EmployeeRepository.readEmployee(id);
    }

    static async createEmployee(name, password, first_name, father_name, last_name, position, email, phone, hire_date, info) {
        return await EmployeeRepository.createEmployee(name, password, first_name, father_name, last_name, position, email, phone, hire_date, info);
    }

    static async deleteEmployee(id) {
        return await EmployeeRepository.deleteEmployee(id);
    }

    static async updateEmployee(id, name, password, first_name, father_name, last_name, position, email, phone, hire_date, info) {
        return await EmployeeRepository.updateEmployee(id, name, password, first_name, father_name, last_name, position, email, phone, hire_date, info);
    }
}

module.exports = EmployeeService;