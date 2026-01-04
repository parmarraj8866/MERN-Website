const { common } = require("./common.model");
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        ...common
    },
    email: {
        ...common,
        unique: [true, "Email Already Exist!"]
    },
    password: {
        ...common
    },
    mobile: {
        ...common,
        type: Number,
        unique: [true, "Mobile Number Already Exist!"]
    }

}, {
    timeStamps: true
})


exports.User = mongoose.model("user", userSchema)