const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://new-user1:phamhac90@cluster0.wnxxduc.mongodb.net/node2?retryWrites=true&w=majority"
        );
        console.log("connect succesfully");
    } catch (error) {
        console.log("connect faile");
    }
}

module.exports = { connect };
