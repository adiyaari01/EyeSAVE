const AppError = require('../utils/appError');

// handle errors and return the right msg

const handleDuplicateFieldsDB = err => {
    const message = `Duplicate field value. Please use another value!`;
    return new AppError(message, 409);
};

const handleServiceUnavailable = err => {
    const message = `Service Unavailable`;
    return new AppError(message, 503);
};

const handleGatewayTimeout = err => {
    const message = `Gateway Timeout`;
    return new AppError(message, 504);
};

const handleValidationErrorDB = err => {
    const errors = Object.values(err.errors).map(el => el.message);
  
    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400);
};

const handleCastErrorDB = err => {
    const message = `Mongoose failed to cast a value`;
    return new AppError(message, 400);
};

module.exports = (err,req,res,next) =>{
    console.log(err.message)

    if (err.code === 11000){
        err = handleDuplicateFieldsDB(err);
    }

    if (err.code === 503){
        err = handleServiceUnavailable(err);
    }

    if (err.code === 504){
        err = handleGatewayTimeout(err);
    }
    
    if (err.name === 'ValidationError')
    err = handleValidationErrorDB(err);

    if (err.name === 'CastError')
    err = handleCastErrorDB(err);

    return res.status(err.statusCode).json(err);
}
 

