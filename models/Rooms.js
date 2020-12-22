const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
    roomName: {
        type: String,
    },
});

module.exports = Rooms = mongoose.model("rooms", roomSchema)