const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const { mongoDB } = require("./config");
const userModel = require("./models/user");

mongoose.connect(
    mongoDB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Database Connected");
    }
);

async function createUser() {
    await userModel.deleteMany({}).exec();
    userModel.create([
        {
            username: "yem",
            password:  bcryptjs.hashSync("elisabeth"),
            firstName: "Yeshi",
            surname: "Mohamed",
            profileImage: "https://i.pinimg.com/564x/d6/d2/fd/d6d2fde64ee6899341cd750a95461fd5.jpg"
        }
    ]);
};

createUser();