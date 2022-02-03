const express = require("express");
const router = express.Router();
const {getEvents,getEventById,createEvent,updateEvent,deleteEvent} = require("../controllers/events.controllers");

router.route("/").get(getEvents);
router.route("/:id").get(getEventById);
router.route('/').post(createEvent);
router.route('/:id').put(updateEvent); 
router.route('/:id').delete(deleteEvent);

module.exports = router;