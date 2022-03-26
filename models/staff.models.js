const {Schema, model} = require("mongoose");

const StaffMemberSchema = new Schema({
    _id : Number,
    _telegramID : String,
    _firstName : String,
    _lastName : String,
    _address : String,
    _imageUrl : String,
    _birthdate : String,
    _phone : String,
    _position : String
}, {versionKey:false, collection:"staff"}); 

module.exports = model("Staff", StaffMemberSchema);