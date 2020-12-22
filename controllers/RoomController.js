const Rooms = require("../models/Rooms");

exports.getRooms = async (req, res) => {
    try {
        const allRooms = await Rooms.find({});
        res.status(200).json(allRooms)
    } catch (error) {
        return res.status(500).json({ errors: [{ message: error.message }] });
    }
};

exports.addRoom = async (req, res) => {
    try {
        const { roomName } = req.body;

        const newRoom = new Rooms({
            roomName,
        });

        const addedRoom = await newRoom.save({ new: true });
        res.status(201).json(addedRoom);

    } catch (error) {
        return res.status(500).json({ errors: [{ message: error.message }] })
    }
}