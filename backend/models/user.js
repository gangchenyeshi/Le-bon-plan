const mongoose = require("mongoose"); 

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    username: {type: String, unique: true},
    password: {type:String,minlength:8},
    firstName: String,
    surname: String,
    profileImage: String
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;