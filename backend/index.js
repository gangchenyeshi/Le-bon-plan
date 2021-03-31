const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const expressValidator = require("express-validator");
const passwordValidator = require("password-validator");
const UserSchema

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

app.post('/signup',
    expressValidator.body("username").isEmail(),
    expressValidator.body("password").custom((value) => {
        var schema = new passwordValidator();
        schema
            .is().min(8)
            .has().uppercase()
            .has().lowercase()
            .has().not().spaces()
            .is().not().oneOf(["Passw0rd", "Password123,Azerty123"]);
        return schema.validate(value);
    }),
    (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty() === false) {
            res.json({
                errors: errors.array()
            });
            return;
        } else {
            res.json({
                success: true,
                message: 'Welcome to the real World Neo'
            });
        }
    }
);
