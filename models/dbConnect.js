const mongoose = require("mongoose");

const DataBase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Succesfully connected to DB");

    } catch (error) {
        console.log("Error while connecting DB", error)
        
    }
};

module.exports = DataBase;