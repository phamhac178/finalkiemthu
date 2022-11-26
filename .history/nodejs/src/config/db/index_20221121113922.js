const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://new-user1:phamhac90@cluster0.abtrmlz.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true});
        const db = mongoose.connection()
        if(db){
            cons
        }
    } catch (error) {
        console.log("connect faile");
    }
}

module.exports = { connect };
