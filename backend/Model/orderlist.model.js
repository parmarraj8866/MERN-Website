const { Schema, model } = require("mongoose");

const orderList = new Schema({
    name: String,
    category: String,
    color: String,
    size: String,
    image: String,
    price: Number,
    discount: Number,
    gender: String
})

module.exports = model("orderList", orderList)