const {Schema, model} = require("mongoose");

const StaffAttandanceReportSchema = new Schema({
    _employeeId : Number,
    _date : String,
    _arrivalTime : String,
    _departureTime : String,
}, {versionKey:false, collection:"staff_attendance"}); 

module.exports = model("StaffAttendanceReport", StaffAttandanceReportSchema);