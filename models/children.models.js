const {Schema, model} = require("mongoose");

const ChildSchema = new Schema({
    _id : Number,
    _firstName : String,
    _lastName : String,
    _address : String,
    _escort : [{type: Number, ref: "Escort"}],
    _imageUrl : String,
    _birthdate : String,
}, {versionKey:false}); 

module.exports = model("Child", ChildSchema);