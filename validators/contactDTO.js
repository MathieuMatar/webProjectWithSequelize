const { body, param, validationResult } = require('express-validator');

const validateContact = [
    body('client_id')
        .isNumeric()
        .withMessage('Client ID must be a number')
        .notEmpty()
        .withMessage('Client ID is required'),
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
    body('role')
        .isString()
        .withMessage('Role must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateContactId = [
    param('id')
        .isNumeric()
        .withMessage('Contact ID must be a number')
        .notEmpty()
        .withMessage('Contact ID is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateContact, validateContactId };