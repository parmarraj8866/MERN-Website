const { Schema, model } = require("mongoose")
const { common } = require("./common.model")

const ContactClient = new Schema({
    contactname: common,
    contactemail: common,
    contactnumber: {
        ...common,
        type: Number
    },
    contactmessage: common
})


module.exports = model("contactClient", ContactClient)