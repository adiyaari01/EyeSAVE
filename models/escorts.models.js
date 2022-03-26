const {Schema, model} = require("mongoose");

const EscortSchema = new Schema({
    _id : Number,
    _telegramID : String,
    _firstName : String,
    _lastName : String,
    _address : String,
    _children : [{type: Number, ref: "Child"}],
    _imageUrl : String,
    _birthdate : String,
    _phone : String,
    _relation : String
}, {versionKey:false}); 

module.exports = model("Escort", EscortSchema);