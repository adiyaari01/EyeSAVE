const {Schema, model} = require("mongoose");

const SettingsSchema = new Schema({
    _startMorning : String,
    _endMorning : String,
    _startNoon : String,
    _endNoon : String,
}, {versionKey:false}); 

module.exports = model("settings", SettingsSchema);