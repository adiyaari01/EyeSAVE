const express = require("express");
const router = express.Router();
const {getRecordings} = require("../controllers/recordings.controllers");

router.route("/")
    .get(getRecordings);

module.exports = router;