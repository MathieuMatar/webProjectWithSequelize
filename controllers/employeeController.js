const employeeService = require('../services/employeeService');

/**
 * Controller for handling employee-related operations.
 *
 * @class EmployeeController
 */

/**
 * Retrieves a list of employees.
 *
 * @async
 * @function getEmployees
 * @memberof EmployeeController
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the list of employees or an error message.
 * @throws {Error} An error occurred while retrieving the employees.
 */

/**
 * Retrieves a specific employee by ID.
 *
 * @async
 * @function getEmployee
 * @memberof EmployeeController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the employee.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves with the employee data or a 404 error message if not found.
 * @throws {Error} An error occurred while retrieving the employee.
 */

/**
 * Creates a new employee.
 *
 * @async
 * @function createEmployee
 * @memberof EmployeeController
 * @param {Object} req - Express request object.
 * @param {Object} req.body - The request payload.
 * @param {string} req.body.name - The username of the employee.
 * @param {string} req.body.password - The password of the employee.
 * @param {string} req.body.first_name - The first name of the employee.
 * @param {string} req.body.father_name - The father's name of the employee.
 * @param {string} req.body.last_name - The last name of the employee.
 * @param {string} req.body.position - The position of the employee.
 * @param {string} req.body.email - The email address of the employee.
 * @param {string} req.body.phone - The phone number of the employee.
 * @param {string} req.body.hire_date - The hire date of the employee.
 * @param {string} req.body.info - Additional information about the employee.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the employee has been created or an error occurred.
 * @throws {Error} An error occurred while creating the employee.
 */

/**
 * Updates an existing employee's information.
 *
 * @async
 * @function updateEmployee
 * @memberof EmployeeController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the employee to be updated.
 * @param {Object} req.body - The request payload.
 * @param {string} req.body.name - The username of the employee.
 * @param {string} req.body.password - The password of the employee.
 * @param {string} req.body.first_name - The first name of the employee.
 * @param {string} req.body.father_name - The father's name of the employee.
 * @param {string} req.body.last_name - The last name of the employee.
 * @param {string} req.body.position - The position of the employee.
 * @param {string} req.body.email - The email address of the employee.
 * @param {string} req.body.phone - The phone number of the employee.
 * @param {string} req.body.hire_date - The hire date of the employee.
 * @param {string} req.body.info - Additional information about the employee.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the employee has been updated or a 404 error message if not found.
 * @throws {Error} An error occurred while updating the employee.
 */

/**
 * Deletes an employee by their ID.
 *
 * @async
 * @function deleteEmployee
 * @memberof EmployeeController
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Route parameters.
 * @param {string|number} req.params.id - The unique identifier of the employee to be deleted.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Returns a Promise that resolves once the employee has been deleted or a 404 error message if not found.
 * @throws {Error} An error occurred while deleting the employee.
 */


class EmployeeController {
    static async getEmployees(req, res) {
        try {
            const result = await employeeService.readEmployees();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the employees' });
        }
    }

    static async getEmployee(req, res) {
        try {
            const { id } = req.params;
            const result = await employeeService.readEmployee(id);
            if (!result) {
                return res.status(404).json({ error: 'Employee not found' });
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while retrieving the employee' });
        }
    }

    static async createEmployee(req, res) {
        try {
            const { name, password, first_name, father_name, last_name, position, email, phone, hire_date, info } = req.body;
            const result = await employeeService.createEmployee(name, password, first_name, father_name, last_name, position, email, phone, hire_date, info);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the employee' });
        }
    }

    static async updateEmployee(req, res) {
        try {
            const { id } = req.params;
            const { name, password, first_name, father_name, last_name, position, email, phone, hire_date, info } = req.body;
            const result = await employeeService.updateEmployee(id, name, password, first_name, father_name, last_name, position, email, phone, hire_date, info);
            if (!result) {
                return res.status(404).json({ error: 'Employee not found' });
            }
            res.status(200).json({ message: 'Employee updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the employee' });
        }
    }

    static async deleteEmployee(req, res) {
        try {
            const { id } = req.params;
            const result = await employeeService.deleteEmployee(id);
            if (!result) {
                return res.status(404).json({ error: 'Employee not found' });
            }
            res.status(200).json({ message: 'Employee deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting the employee' });
        }
    }
}

module.exports = EmployeeController;