const { body, param, validationResult } = require('express-validator');

const validateMilestone = [
    body('name')
        .isString()
        .withMessage('Name must be a string')
        .notEmpty()
        .withMessage('Name is required'),
    body('description')
        .isString()
        .withMessage('Description must be a string'),
    body('date')
        .isDate()
        .withMessage('Date must be a date'),
    body('due_date')
        .isDate()
        .withMessage('Due date must be a date'),
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

module.exports = {
    validateMilestone
}