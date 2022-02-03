const {Schema, model} = require("mongoose");

const KindergartenSchema = new Schema({
    _name : String,
    _address : String,
    _children : Array,
    _staff : Array,
    _parents : Array,
    _phone : Number,
}, {versionKey:false}); 

module.exports = model("Kindergarten", KindergartenSchema);