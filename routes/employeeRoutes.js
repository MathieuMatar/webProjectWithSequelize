const express = require('express');
const employeeController = require('../controllers/employeeController');
const { validateEmployee, validateEmployeeId } = require('../validators/employeeDTO');

const router = express.Router();

/**
GET /api/employees
Retrieves all employees from the database.

GET /api/employees/:id
Retrieves a specific employee by ID.
@param {string} id - Employee ID

POST /api/employees
Creates a new employee.
Request body:
{
  name: string,
  password: string,
  first_name: string,
  father_name: string,
  last_name: string,
  position: string,
  email: string,
  phone: string,
  hire_date: date,
  info: string
}

PUT /api/employees/:id
Updates an existing employee by ID.
@param {string} id - Employee ID
{
  name: string,
  password: string,
  first_name: string,
  father_name: string,
  last_name: string,
  position: string,
  email: string,
  phone: string,
  hire_date: date,
  info: string
}

DELETE /api/employees/:id
Deletes an employee by ID.
@param {string} id - Employee ID

*/

router.get('/', employeeController.getEmployees);
router.post('/', validateEmployee, employeeController.createEmployee);
router.get('/:id', validateEmployeeId, employeeController.getEmployee);
router.delete('/:id', validateEmployeeId, employeeController.deleteEmployee);
router.put('/:id', validateEmployeeId, employeeController.updateEmployee);

module.exports = router;
