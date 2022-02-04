const { body, validationResult } = require('express-validator');

exports.childrenAttendanceCreateValidation = [
    body('_childId',"Is not valid").isNumeric().isLength({ min : 9, max : 9 }),
    body('_absence',"Is not valid").isString().isLength({ min : 0, max : 10 }),
    body('_delay',"Is not valid").isBoolean(),
    body('_date',"Date is not valid (yyyy/mm/dd)").isDate(),
    body('_arrivalTime',"Date is not valid (hh:mm:ss)").isLength({ min : 0, max : 8 }),
    body('_departureTime',"Date is not valid (hh:mm:ss)").isLength({ min : 0, max : 8 }),
];