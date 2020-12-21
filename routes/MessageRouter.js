const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/MessageController");

router.get("/messages/sync", MessageController.getMessages);

router.post("/messages/new", MessageController.addMessage);

module.exports = router;