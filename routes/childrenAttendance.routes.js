const express = require("express");
const router = express.Router();
const {handleValidationRequest} = require('../middlewares/util.middleware');
const {childrenAttendanceCreateValidation} = require('../middlewares/childrenAttendance.middlewares');

const {getReports,getReportById,createReport,updateReport,deleteReport} = require("../controllers/childrenAttendance.controllers");

router.route("/")
    .get(getReports)
    .post(childrenAttendanceCreateValidation, handleValidationRequest, createReport);

router.route("/:id")
    .get(getReportById)
    .put(updateReport)
    .delete(deleteReport);

module.exports = router;