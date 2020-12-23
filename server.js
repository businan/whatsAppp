const express = require('express');
const app = express();

require('dotenv').config();
const path = require('path');
const cors = require("cors");


const connectDB = require("./models/dbConnect");
const router = require('./routes/router');
const pusher = require("./helpers/Pusher");
const roomPusher = require("./helpers/PusherRoom");

connectDB();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use("/", router)

// production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});