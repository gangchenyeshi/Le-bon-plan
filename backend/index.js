const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("./config");
const userModel = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
});

mongoose.connect(
    config.mongoDB, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
    console.log("Database connected");
});

app.get("/", (req, res) => {
    res.send("Bienvenue sur Le Bon Plan !")
});

app.post("signup", async(req, res) => {

});

