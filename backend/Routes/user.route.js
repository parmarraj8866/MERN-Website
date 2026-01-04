const { login, signup, checkAuth } = require("../Controller/user.controller")


const router = require("express").Router()

router.post("/signup", signup)
router.post("/login", login)
router.get("/checkAuth", checkAuth)

module.exports = router