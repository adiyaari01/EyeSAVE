const {Schema, model} = require("mongoose");

const KindergartenSchema = new Schema({
    _name : String,
    _address : String,
    _children : [{type: Number, ref: "Child"}],
    _staff : [{type: Number, ref:"StaffMember"}],
    _phone : Number,
}, {versionKey:false}); 

module.exports = model("Kindergarten", KindergartenSchema);


// Children.findOne(filter).populate('_escort')