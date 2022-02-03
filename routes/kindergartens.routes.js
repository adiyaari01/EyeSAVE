const express = require("express");
const router = express.Router();
const {handleValidationRequest} = require('../middlewares/util.middleware');
const {kindergartenCreateValidation} = require('../middlewares/kindergartens.middlewares');
const {getKindergartenById, getKindergartens, createKindergarten, updateKindergarten, deleteKindergarten} = require("../controllers/kindergartens.controllers");

router.route("/")
    .get(getKindergartens)
    .post(kindergartenCreateValidation, handleValidationRequest, createKindergarten);

router.route("/:id")
    .get(getKindergartenById)
    .put(updateKindergarten)
    .delete(deleteKindergarten);

module.exports = router;