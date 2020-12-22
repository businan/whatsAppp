const express = require("express");
const router = express.Router();
const RoomController = require("../controllers/RoomController");

router.get("/sync", RoomController.getRooms);

router.post("/new", RoomController.addRoom);

module.exports = router;