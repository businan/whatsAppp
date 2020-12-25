const mongoose = require("mongoose");
const { Schema } = mongoose;

const MessageSchema = new Schema({
    room_Id: {
        type: String
    },
    message: {
        type: String, 
    }, 
    name: {
        type: String, 
    },
    timestamp: {
        type: String,
    }
})

module.exports = Messages = mongoose.model("messages", MessageSchema);