const { Schema, model, Types } = require("mongoose");

const orderList = new Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "clothWeb"
    },
    qty: Number


})

module.exports = model("orderList", orderList)