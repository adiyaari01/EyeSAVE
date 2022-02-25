const { body, validationResult } = require('express-validator');

exports.kindergartenCreateValidation = [
    body('_name',"Is not valid").isString().isLength({ min : 1, max : 15 }),
    body('_address').isString().isLength({ min : 5, max : 35 }),
    body('_phone').isString().isLength({ min : 13, max : 13 }),
];
