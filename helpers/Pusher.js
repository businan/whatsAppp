const mongoose = require("mongoose");
const Pusher = require("pusher");
require("dotenv").config({ "path": "./.env" })

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: "eu",
    useTLS: true
});

const db = mongoose.connection

db.once('open', () => {
    // console.log("Db connected")
    
        const msgCollection =  db.collection("messages");
        
        const changeStream =  msgCollection.watch();

        changeStream.on("change", change => {
            
            if (change.operationType === "insert") {
                const messageDetail = change.fullDocument;
                
                pusher.trigger("messages", "inserted",
                    {
                        _id: messageDetail._id,
                        message: messageDetail.message,
                        name: messageDetail.name,
                        timestamp: messageDetail.timestamp,
                        received: messageDetail.received
                    }
                )
                .then(console.log("triggered pusher"))
                .catch(err => console.log(err));
            } else {
                console.log("Error triggering in Pusher")
            }
        })

});

module.exports = pusher;