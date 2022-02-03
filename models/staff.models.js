const {Schema, model} = require("mongoose");

const StaffMemberSchema = new Schema({
    _id : Number,
    _firstName : String,
    _lastName : String,
    _address : String,
    _imageUrl : String,
    _birthdate : Date,
    _phone : Number,
    _position : String
}, {versionKey:false, collection:"staff"}); 

module.exports = model("StaffMember", StaffMemberSchema);