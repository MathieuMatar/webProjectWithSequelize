const db = require('../config/db');
const Employee = require('../models/employeeModel');

class EmployeeRepository {
    static async createEmployee(employee) {
        const sql = `INSERT INTO employee (employee_id, name, password, first_name, father_name, last_name, position, email, phone, hire_date, info) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const params = [employee.employee_id, employee.name, employee.password, employee.first_name, employee.father_name, employee.last_name, employee.position, employee.email, employee.phone, employee.hire_date, employee.info];
        try {
            await db.query(sql, params);
            return { success: true, message: "Employee created successfully." };
        } catch (error) {
            console.error("Error creating employee:", error);
            return { success: false, message: "Failed to create employee." };
        }
    }

    static async updateEmployee(employee_id, name, password, first_name, father_name, last_name, position, email, phone, hire_date, info) {
        console.log("id",employee_id, "\nname",name, "\npassword",password, "\nfirst_name",first_name, "\nfather_name",father_name, "\nlast_name",last_name, "\nposition",position, "\nemail",email, "\nphone",phone, "\nhire_date",hire_date, "\ninfo",info);
        const sql = `UPDATE employee SET name = ?, password = ?, first_name = ?, father_name = ?, last_name = ?, position = ?, email = ?, phone = ?, hire_date = ?, info = ? WHERE employee_id = ?`;
        const params = [name, password, first_name, father_name, last_name, position, email, phone, hire_date, info, employee_id];
        try {
            await db.query(sql, params);
            return { success: true, message: "Employee updated successfully." };
        } catch (error) {
            console.error("Error updating employee:", error);
            return { success: false, message: "Failed to update employee." };

        }
    }

    static async readEmployees() {
        const sql = 'SELECT * FROM employee';
        try {
            const rows = await db.query(sql);
            return rows.map(row => Employee.fromRow(row));
        } catch (error) {
            console.error("Error reading employees:", error);
            return { success: false, message: "Failed to read employees." };
        }
    }

    static async readEmployee(employee_id) {
        const sql = `SELECT * FROM employee WHERE employee_id = ?`;
        try {
            const rows = await db.query(sql, [employee_id]);
            if (rows.length === 0) return null;
            return Employee.fromRow(rows[0]);
        } catch (error) {
            console.error("Error reading employee:", error);
            return { success: false, message: "Failed to read employee." };
        }
    }

    static async deleteEmployee(employee_id) {
        const sql = 'DELETE FROM employee WHERE employee_id = ?';
        try {
            const result = await db.query(sql, employee_id);
            return result;
        }
        catch (error) {
            console.error("Error deleting employee:", error);
            return { success: false, message: "Failed to delete employee." };
        }
    }
}

module.exports = EmployeeRepository;