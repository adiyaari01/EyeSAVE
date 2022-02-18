const express = require("express");
const router = express.Router();
const {handleValidationRequest} = require('../middlewares/util.middleware');
const {staffAttendanceCreateValidation} = require('../middlewares/staffAttendance.middlewares');

const {getReports,getReportById,createReport,updateReport,deleteReport} = require("../controllers/staffAttendance.controllers");

router.route("/")
    .get(getReports)
    .post(staffAttendanceCreateValidation, handleValidationRequest, createReport);

router.route("/:id")
    .get(getReportById)
    .put(updateReport)
    .delete(deleteReport);

module.exports = router;