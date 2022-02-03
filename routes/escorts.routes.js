const express = require("express");
const router = express.Router();
const {getEscorts,getEscortById,createEscort,updateEscort,deleteEscort} = require("../controllers/escorts.controllers");

router.route("/").get(getEscorts);
router.route("/:id").get(getEscortById);
router.route('/').post(createEscort);
router.route('/:id').put(updateEscort); 
router.route('/:id').delete(deleteEscort);

module.exports = router;