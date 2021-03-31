const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("./config");
const userModel = require("./models/user");

const app = express();

app.use(bodyParser.json());

const verifyToken = async (req, res, next) => {
    try {
        const generateToken = req.headers.authorization;
        const result = jwt.verify(generateToken.split(" ")[1], config.secret);
        const user = await userModel
            .findOne({
                _id: result.id
            })
            .exec();
        req.user = user;
        console.log(user);
        next();
    } catch (err) {
        res.status(401).send("Access Denied");
    }
};

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
app.post('/signup',
  expressValidator.body("username").isEmail(),
  expressValidator.body("password").custom((value) => {
    var schema = new passwordValidator();
    schema
      .is().min(8) 
      .has().uppercase() 
      .has().lowercase()
      .has().digits(1) 
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



app.post("/login", async (req, res) => {
    const user = await userModel
        .findOne({
            email: req.body.email
        })
        .exec();

    if (bcryptjs.compareSync(req.body.password, user.password)) {
        const generateToken = jwt.sign(
            {
                id: user._id
            },
            config.secret,
            {
                expiresIn: 3600
            }
        );
        res.status(200).json({
            message: "Connection successful.",
            token: generateToken
        });
    } else {
        res.status(401).send("The password is invalid. Please try again.");
    }
});

app.get("/profile", verifyToken, async (req, res) => {
    res.send(`Welcome ${req.user.username}!`);
});
