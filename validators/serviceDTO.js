const { body, param, validationResult } = require('express-validator');

const validateService = [
    body('service_id')
        .isString()
        .withMessage('Category ID must be a string')
        .notEmpty()
        .withMessage('Category ID is required'),
    body('name')
        .isString()
        .withMessage('Name must be a string')
        .notEmpty()
        .withMessage('Name is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];





module.exports = {
    validateService
}