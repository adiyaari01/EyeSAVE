const express = require("express");
const router = express.Router();
const {getSettings,createSettigns,updateSettings, getSettingsById, deleteSettings} = require("../controllers/settings.controllers");

router.route("/")
    .get(getSettings)
    .post(createSettigns);

router.route("/:id")
    .get(getSettingsById)
    .put(updateSettings)
    .delete(deleteSettings);

module.exports = router;