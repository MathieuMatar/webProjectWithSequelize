const { body, param, validationResult } = require('express-validator');
//type, projectId, contactAssigned, employeeAssigned, contactCompleted, employeeCompleted, completed, date, dueDate, taskDescription, importanceLevel
const validateTask = [
    body('type')
        .isString()
        .withMessage('Task type must be a string')
        .notEmpty()
        .withMessage('Task type is required'),
    body('projectId')
        .isNumeric()
        .withMessage('Project ID must be a number'),
    body('contactAssigned')
        .isNumeric()
        .withMessage('Contact assigned must be a number'),
    body('employeeAssigned')
        .isNumeric()
        .withMessage('Employee assigned must be a number'),
    body('contactCompleted')
        .isNumeric()
        .withMessage('Contact completed must be a number'),
    body('employeeCompleted')
        .isNumeric()
        .withMessage('Employee completed must be a number'),
    body('completed')
        .isIn(['Y', 'N', 'C'])
        .withMessage('Completed must be one of the following values: Y, N, C'),
    body('date')
        .isDate()
        .withMessage('Date must be a valid date'),
    body('dueDate')
        .isDate()
        .withMessage('Due date must be a valid date'),
    body('taskDescription')
        .isString()
        .withMessage('Task description must be a string')
        .notEmpty()
        .withMessage('Task description is required'),
    body('importanceLevel')
        .isIn(['Critical', 'High', 'Medium', 'Low', 'Optional'])
        .withMessage('Importance level must be one of the following values: Critical, High, Medium, Low, Optional'),
    body('importanceLevel')
        .isString()
        .withMessage('Importance level must be a string'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateTaskId = [
    param('id')
        .isNumeric()
        .withMessage('Task ID must be a number')
        .notEmpty()
        .withMessage('Task ID is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateTask,
    validateTaskId
};