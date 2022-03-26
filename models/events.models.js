const {Schema, model} = require("mongoose");

const EventSchema = new Schema({
    _date : String,
    _startTime: String,
    _endTime: String,
    _duration : Number,
    _eventType : String,
    _child1 : Number,
    _child2 : Number,
    _videoUrl : String,
}, {versionKey:false}); 

module.exports = model("Event", EventSchema);