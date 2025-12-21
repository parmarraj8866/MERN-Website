const router = require('express').Router()
const controller = require("../Controller/contact.controller.js")


router.post("/", controller.ContactCreate)

module.exports = router