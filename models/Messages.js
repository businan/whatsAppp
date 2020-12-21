const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
    message: {
        type: String, 
    }, 
    name: {
        type: String, 
    },
    timestamp: {
        type: String,
    },
    received: {
        type: Boolean,
    }
})

module.exports = Messages = mongoose.model("messages", schema);