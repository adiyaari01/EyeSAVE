const {Schema, model} = require("mongoose");

const SettingsSchema = new Schema({
    _startMorning : String,
    _endMorning : String,
    _startYard : String,
    _endYard : String,
    _startPickUp : String,
    _endPickUp : String,
    _cameraName1 : String,
    _cameraUrl1 : String,
    _cameraName2 : String,
    _cameraUrl2 : String,
    _cameraName3 : String,
    _cameraUrl3 : String,
}, {versionKey:false}); 

module.exports = model("settings", SettingsSchema);