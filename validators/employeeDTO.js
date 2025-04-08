const { body, param, validationResult } = require('express-validator');

const validateEmployee = [
    body('name')
        .isString()
        .withMessage('Name must be a string')
        .notEmpty()
        .withMessage('Name is required'),
    body('password')
        .isString()
        .withMessage('Password must be a string')
        .notEmpty()
        .withMessage('Password is required'),
    body('first_name')
        .isString()
        .withMessage('First name must be a string')
        .notEmpty()
        .withMessage('First name is required'),
    body('father_name')
        .isString()
        .withMessage('Father name must be a string')
        .notEmpty()
        .withMessage('Father name is required'),
    body('last_name')
        .isString()
        .withMessage('Last name must be a string')
        .notEmpty()
        .withMessage('Last name is required'),
    body('position')
        .isString()
        .withMessage('Position must be a string'),
    body('email')
        .isEmail()
        .withMessage('Email must be a valid email'),
    body('phone')
        .isString()
        .withMessage('Phone must be a string'),
    body('hire_date')
        .isString()
        .withMessage('Hire date must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateEmployeeId = [
    param('id')
        .isNumeric()
        .withMessage('Employee ID must be a number')
        .notEmpty()
        .withMessage('Employee ID is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateEmployee,
    validateEmployeeId
};