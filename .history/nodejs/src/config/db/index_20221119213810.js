const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://new-user:phamhac90@cluster0.9h9qxtd.mongodb.net/node2?retryWrites=true&w=majority"
        );
        console.log("connect succesfully");
    } catch (error) {
        console.log("connect failed");
    }
}

module.exports = { connect };
