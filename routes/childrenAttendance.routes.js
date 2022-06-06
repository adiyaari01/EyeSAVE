const express = require("express");
const router = express.Router();
const {handleValidationRequest} = require('../middlewares/util.middleware');
const {childrenAttendanceCreateValidation} = require('../middlewares/childrenAttendance.middlewares');

const {getReports,getReportById,createReport,updateReport,deleteReport} = require("../controllers/childrenAttendance.controllers");

router.route("/")
    .get(getReports)
    .post(childrenAttendanceCreateValidation, handleValidationRequest, createReport);

router.route("/:_id")
    .get(getReportById)
    .put(updateReport)
    .delete(deleteReport);

// route of report of specific child from specific date
router.route("/:_date/children/:_childId")
    .put(updateReport)

module.exports = router;