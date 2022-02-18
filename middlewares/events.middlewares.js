const { body, validationResult } = require('express-validator');

exports.eventCreateValidation = [
    body('_kindergartenId',"Is not valid").isString({ min : 9, max : 30 }),
    body('_eventType',"Is not valid").isString().isLength({ min : 0, max : 35 }),
    body('_date',"Time stamp is not valid (yyyy/mm/dd)").isDate()
];

