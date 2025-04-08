const { body, param, validationResult } = require('express-validator');

const validateService = [//name, description, rate, duration, status 
    body('name')
        .isString()
        .withMessage('Name must be a string')
        .notEmpty()
        .withMessage('Name is required'),
    body('description')
        .isString()
        .withMessage('Description must be a string'),
    body('rate')
        .isNumeric()
        .withMessage('Rate must be a number'),
    body('duration')
        .isNumeric()
        .withMessage('Duration must be a number'),
    body('status')
        .isIn(['Active', 'Inactive'])
        .withMessage('Status must be either Active or Inactive'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateServiceId = [
    param('id')
        .isNumeric()
        .withMessage('Service ID must be a number')
        .notEmpty()
        .withMessage('Service ID is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];





module.exports = {
    validateService,
    validateServiceId
}