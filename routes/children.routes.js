const express = require("express");
const router = express.Router();
const {getChildren,getChildById,createChild,updateChild,deleteChild} = require("../controllers/children.controllers");

router.route("/").get(getChildren);
router.route("/:id").get(getChildById);
router.route('/').post(createChild);
router.route('/:id').put(updateChild); 
router.route('/:id').delete(deleteChild);

module.exports = router;