const {Schema, model} = require("mongoose");

const ChildSchema = new Schema({
    _id : Number,
    _firstName : String,
    _lastName : String,
    _address : String,
    _escort : Array,
    _imageUrl : String,
    _birthdate : Date,
}, {versionKey:false}); 

module.exports = model("Child", ChildSchema);