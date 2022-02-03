const express = require("express");
const router = express.Router();
const {getReports,getReportById,createReport,updateReport,deleteReport} = require("../controllers/childrenAttendance.controllers");

router.route("/").get(getReports);
router.route("/:id").get(getReportById);
router.route('/').post(createReport);
router.route('/:id').put(updateReport); 
router.route('/:id').delete(deleteReport);

module.exports = router;