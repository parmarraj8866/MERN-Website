const router = require('express').Router()
const controller = require("../Controller/contact.controller.js")
const { verifyAuth } = require('../Middleware/verifyAuth.middlewar.js')


router.post("/", verifyAuth, controller.ContactCreate)

module.exports = router