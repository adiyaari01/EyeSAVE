const {validationResult } = require('express-validator');
const AppError = require('../utils/appError');

exports.handleValidationRequest = (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        next(new AppError(errors.array(),422));
    }
    next();
}