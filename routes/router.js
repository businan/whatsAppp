const express = require("express");
const router = express.Router();
const MessageRouter = require("./MessageRouter");


router.use("/", MessageRouter);

module.exports = router;
