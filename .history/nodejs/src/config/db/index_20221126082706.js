const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(mongodb+srv://new-user:<password>@cluster0.pxjis.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true});
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
