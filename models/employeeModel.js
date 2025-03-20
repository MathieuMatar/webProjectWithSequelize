const moment = require('moment');

class Employee {
    constructor(employee_id, name, password, first_name, father_name, last_name, position, email, phone, hire_date, info) {
        this.employee_id = employee_id;
        this.name = name;
        this.password = password;
        this.first_name = first_name;
        this.father_name = father_name;
        this.last_name = last_name;
        this.position = position;
        this.email = email;
        this.phone = phone;
        this.hire_date = hire_date;
        this.info = info;
    }

    static fromRow(row) {
        return new Employee(
            row.employee_id,
            row.name,
            row.password,
            row.first_name,
            row.father_name,
            row.last_name,
            row.position,
            row.email,
            row.phone,
            row.hire_date,
            row.info
        )
    }
}

module.exports = Employee;