const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://new-user1:<password>@cluster0.flrto.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true});
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
