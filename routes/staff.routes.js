const express = require("express");
const router = express.Router();
const {handleValidationRequest} = require('../middlewares/util.middleware');
const {staffCreateValidation} = require('../middlewares/staff.middlewares');

const {getStaff,getStaffMemberById,createStaffMember,updateStaffMember,deleteStaffMember} = require("../controllers/staff.controllers");

router.route("/")
    .get(getStaff)
    .post(staffCreateValidation, handleValidationRequest, createStaffMember);
    
router.route("/:id")
    .get(getStaffMemberById)
    .put(updateStaffMember)
    .delete(deleteStaffMember);

module.exports = router;