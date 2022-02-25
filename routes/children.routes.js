const express = require("express");
const router = express.Router();
const {handleValidationRequest} = require('../middlewares/util.middleware');
const {childrenCreateValidation} = require('../middlewares/children.middlewares');
const {getChildren,getChildById,createChild,updateChild,deleteChild, getChildByParentId} = require("../controllers/children.controllers");

router.route("/")
    .get(getChildren)
    .post(childrenCreateValidation, handleValidationRequest, createChild);

router.route("/:id")
    .get(getChildById)
    .put(updateChild)
    .delete(deleteChild);

router.route("/escorts/:parentId").get(getChildByParentId);

module.exports = router;