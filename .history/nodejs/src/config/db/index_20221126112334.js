const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://new-user1:final1@cluster0.flrto.mongodb.net/fianll?retryWrites=true&w=majority",{useNewUrlParser: true});
    } catch (error) {
        console.log(error); 
    }
}

module.exports = { connect };
