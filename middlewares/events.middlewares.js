const { body, validationResult } = require('express-validator');

exports.eventCreateValidation = [
    body('_kindergartenId',"Is not valid").isLength({ min : 9, max : 9 }),
    body('_eventType',"Is not valid").isString().isLength({ min : 0, max : 35 }),
    body('_timeStamp',"Time stamp is not valid").isDate(),
];