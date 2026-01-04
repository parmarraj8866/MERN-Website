const { login, signup, checkAuth, logout } = require("../Controller/user.controller")


const router = require("express").Router()

router.post("/signup", signup)
router.post("/login", login)
router.get("/checkAuth", checkAuth)
router.get("/logout", logout)

module.exports = router