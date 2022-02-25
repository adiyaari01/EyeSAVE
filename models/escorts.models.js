const {Schema, model} = require("mongoose");

const EscortSchema = new Schema({
    _id : Number,
    _telegramID : String,
    _firstName : String,
    _lastName : String,
    _address : String,
    _children : Array,
    _imageUrl : String,
    _birthdate : Date,
    _phone : Number,
    _relation : String
}, {versionKey:false}); 

module.exports = model("Escort", EscortSchema);