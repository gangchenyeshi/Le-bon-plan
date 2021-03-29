const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    descrption: String,
    images: String,
    city: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;