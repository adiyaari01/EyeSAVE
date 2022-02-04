const express = require("express");
const router = express.Router();
const {handleValidationRequest} = require('../middlewares/util.middleware');
const {escortsCreateValidation} = require('../middlewares/escorts.middlewares');

const {getEscorts,getEscortById,createEscort,updateEscort,deleteEscort} = require("../controllers/escorts.controllers");

router.route("/")
    .get(getEscorts)
    .post(escortsCreateValidation, handleValidationRequest, createEscort);
    
router.route("/:id")
    .get(getEscortById)
    .put(updateEscort) 
    .delete(deleteEscort);

module.exports = router;