const { body, validationResult } = require('express-validator');

exports.childrenAttendanceCreateValidation = [
    body('_childId',"Is not valid").isNumeric().isLength({ min : 9, max : 9 }),
    body('_absence',"Is not valid").isString().isLength({ min : 0, max : 10 }),
    body('_childDelay',"Is not valid").isBoolean(),
    body('_escortDelay',"Is not valid").isBoolean(),
    body('_date',"Date is not valid (yyyy-mm-dd)").isDate(),
    body('_arrivalTime',"Time is not valid (hh:mm:ss)").isLength({ min : 0, max : 8 }),
    body('_departureTime',"Time is not valid (hh:mm:ss)").isLength({ min : 0, max : 8 }),
];