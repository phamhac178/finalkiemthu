const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://new-user1:<password>@cluster0.abtrmlz.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("connect succesfully");
    } catch (error) {
        console.log("connect faile");
    }
}

module.exports = { connect };
