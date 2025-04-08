const { body, param, validationResult } = require('express-validator');

const validateClient = [
    body('name')
        .isString()
        .withMessage('Name must be a string')
        .notEmpty()
        .withMessage('Name is required'),
    body('email')
        .isEmail()
        .withMessage('Email must be a valid email'),
    body('phone')
        .isString()
        .withMessage('Phone must be a string'),
    body('address')
        .isString()
        .withMessage('Address must be a string'),
    body('client_type')
        .isString()
        .withMessage('Client type must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateClientId = [
    param('id')
        .isNumeric()
        .withMessage('Client ID must be a number')
        .notEmpty()
        .withMessage('Client ID is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateClient, validateClientId };