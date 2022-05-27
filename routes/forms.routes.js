const express = require("express");
const router = express.Router();

const {getForms,getFormById,createForm,updateForm,deleteForm} = require("../controllers/forms.controllers");

router.route("/")
    .get(getForms)
    .post(createForm);

router.route("/:id")
    .get(getFormById)
    .put(updateForm)
    .delete(deleteForm);

module.exports = router;