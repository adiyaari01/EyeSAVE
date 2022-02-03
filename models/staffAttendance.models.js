const {Schema, model} = require("mongoose");

const StaffAttandanceReportSchema = new Schema({
    _employeeId : Number,
    _arrival : Date,
    _departure : Date,
}, {versionKey:false, collection:"staff_attendance"}); 

module.exports = model("StaffAttendanceReport", StaffAttandanceReportSchema);