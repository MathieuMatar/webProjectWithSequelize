const express = require('express');
const employeeController = require('../controllers/employeeController');
const { validateEmployee } = require('../validators/employeeDTO');

const router = express.Router();

router.get('/', employeeController.getEmployees);
router.post('/', validateEmployee, employeeController.createEmployee);
router.get('/:id', employeeController.getEmployee);
router.delete('/:id', employeeController.deleteEmployee);
router.put('/:id', employeeController.updateEmployee);

module.exports = router;
