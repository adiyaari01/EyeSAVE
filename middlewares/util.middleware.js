const {validationResult } = require('express-validator');

exports.handleValidationRequest = (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()})
    }
    next();
}