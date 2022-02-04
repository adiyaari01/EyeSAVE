const express = require("express");
const router = express.Router();
const {handleValidationRequest} = require('../middlewares/util.middleware');
const {eventCreateValidation} = require('../middlewares/events.middlewares');

const {getEvents,getEventById,createEvent,updateEvent,deleteEvent} = require("../controllers/events.controllers");

router.route("/")
    .get(getEvents)
    .post(eventCreateValidation, handleValidationRequest, createEvent);

router.route("/:id")
    .get(getEventById)
    .put(updateEvent)
    .delete(deleteEvent);

module.exports = router;