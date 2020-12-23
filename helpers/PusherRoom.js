const mongoose = require("mongoose");
const Pusher = require("pusher");
require("dotenv").config({ "path": "./.env" })

const roomPusher = new Pusher({
    appId: process.env.PUSHER_ROOM_APP_ID,
    key: process.env.PUSHER_ROOM_KEY,
    secret: process.env.PUSHER_ROOM_SECRET,
    cluster: "mt1",
    useTLS: true
});
const database = mongoose.connection



database.once('open', () => {
    // console.log("Db connected in room pusher")

    const msgCollection = database.collection("rooms");
    const changeStream = msgCollection.watch();

    changeStream.on("change", change => {

        if (change.operationType === "insert") {
            const roomDetail = change.fullDocument;

            roomPusher.trigger("rooms", "inserted",
                {
                    _id: roomDetail._id,
                    roomName: roomDetail.roomName
                }
            )
                .then(console.log("triggered pusher"))
                .catch(err => console.log(err));
        } else {
            console.log("Error triggering in Pusher")
        }
    })

});

module.exports = roomPusher;