const employeeService = require('../services/employeeService');

class EmployeeController {
    static async createEmployee(req, res) {
        try {
            const result = await employeeService.createEmployee(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the employee' });
        }
    }

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

}

module.exports = EmployeeController;