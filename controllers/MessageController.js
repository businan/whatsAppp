const Messages = require("../models/Messages");

exports.getMessages = async (req, res) => {
    try {
        const allMessages = await Messages.find({room_Id: req.params.id});
        res.status(200).json(allMessages)
    } catch (error) {
        return res.status(500).json({ errors: [{ message: error.message }] });
    }
};

exports.addMessage = async (req, res) => {
    try {
        const { room_Id, message, name, timestamp, received } = req.body;

        const newMassage = new Messages({
            room_Id,
            message,
            name,
            timestamp,
            received
        });

        const addedMessage = await newMassage.save({ new: true });
        res.status(201).json(addedMessage);

    } catch (error) {
        return res.status(500).json({ errors: [{ message: error.message }] });
    }
}; 
