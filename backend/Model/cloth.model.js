const { Schema, model } = require("mongoose");

const clothSchema = new Schema({
    name: String,
    category: String,
    color: String,
    size: String,
    image: String,
    price: Number,
    discount: Number,
    gender: String
},
   {
    timestamps : true
   }

)

module.exports = model("clothWeb", clothSchema)

