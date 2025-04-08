const { body, param, validationResult } = require('express-validator');

const validateProject = [
    body('name')
        .isString()
        .withMessage('Name must be a string')
        .notEmpty()
        .withMessage('Name is required'),
    body('description')
        .isString()
        .withMessage('Description must be a string'),
    body('client_id')
        .isNumeric()
        .withMessage('Project ID must be a number'),
    body('start_date')
        .isDate()
        .withMessage('Start date must be a date'),
    body('deadline')
        .isDate()
        .withMessage('Deadline must be a date'),
    body('status')
        .isString()
        .withMessage('Status must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateProjectId = [
    param('id')
        .isNumeric()
        .withMessage('Project ID must be a number')
        .notEmpty()
        .withMessage('Project ID is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateProject,
    validateProjectId
}