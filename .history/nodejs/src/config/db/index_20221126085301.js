const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://final:<password>@cluster0.flrto.mongodb.net/final?retryWrites=true&w=majority",{useNewUrlParser: true});
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
