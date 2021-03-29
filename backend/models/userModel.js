const mongoose = require("mongoose"); 

const userSchema = new mongoose.Schema({
    username: String, 
    password: String, 
    firstName: String,
    surname: String,
    profileImage: String
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;