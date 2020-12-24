const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/MessageController");

router.get("/sync/:id", MessageController.getMessages);

router.post("/new", MessageController.addMessage);

module.exports = router;