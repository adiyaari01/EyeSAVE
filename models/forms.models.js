const {Schema, model} = require("mongoose");

const FormSchema = new Schema({
    _expired: Date
}, {versionKey:false}); 

module.exports = model("forms", FormSchema);