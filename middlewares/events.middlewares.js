const { body, validationResult } = require('express-validator');

exports.eventCreateValidation = [
    body('_eventType',"Is not valid").isString().isLength({ min : 0, max : 35 }),
    body('_date',"Date is not valid (yyyy-mm-dd)").isDate(),
];

