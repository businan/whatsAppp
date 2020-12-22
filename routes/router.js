const express = require("express");
const router = express.Router();
const MessageRouter = require("./MessageRouter");
const RoomRouter = require("./RoomRouter");


router.use("/messages", MessageRouter);

router.use("/rooms", RoomRouter);

module.exports = router;
