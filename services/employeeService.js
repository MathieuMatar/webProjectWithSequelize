const EmployeeRepository = require('../repositories/employeeRepository');

class EmployeeService {
    static async createEmployee(employee) {
        return EmployeeRepository.createEmployee(employee);
    }

    static async readEmployees() {
        return EmployeeRepository.readEmployees();
    }

    static async readEmployee(employee_id) {
        return EmployeeRepository.readEmployee(employee_id);
    }

    static async deleteEmployee(employee_id) {
        return EmployeeRepository.deleteEmployee(employee_id);
    }

    static async updateEmployee(employee_id, name, password, first_name, father_name, last_name, position, email, phone, hire_date, info) {
        return EmployeeRepository.updateEmployee(employee_id, name, password, first_name, father_name, last_name, position, email, phone, hire_date, info);
    }
}

module.exports = EmployeeService;