const {Schema, model} = require("mongoose");

const EventSchema = new Schema({
    _kindergartenId : String,
    _eventType : String,
    _videoUrl : String,
    _date : Date,
}, {versionKey:false}); 

module.exports = model("Event", EventSchema);