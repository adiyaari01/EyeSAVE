const {Schema, model} = require("mongoose");

const StaffAttandanceReportSchema = new Schema({
    _employeeId : Number,
    _date : Date,
    _arrivalTime : Date,
    _departureTime : Date,
}, {versionKey:false, collection:"staff_attendance"}); 

module.exports = model("StaffAttendanceReport", StaffAttandanceReportSchema);