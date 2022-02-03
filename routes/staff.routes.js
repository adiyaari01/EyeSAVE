const express = require("express");
const router = express.Router();
const {getStaff,getStaffMemberById,createStaffMember,updateStaffMember,deleteStaffMember} = require("../controllers/staff.controllers");

router.route("/").get(getStaff);
router.route("/:id").get(getStaffMemberById);
router.route('/').post(createStaffMember);
router.route('/:id').put(updateStaffMember); 
router.route('/:id').delete(deleteStaffMember);

module.exports = router;