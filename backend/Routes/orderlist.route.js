const router = require("express").Router()
const controller = require("../Controller/orderList.controller")
const { verifyAuth } = require("../Middleware/verifyAuth.middlewar")
const upload = require("../utils/upload")

router.post("/", verifyAuth, controller.CreateorderList)
router.get("/", verifyAuth, controller.GetOrderList)
router.delete("/:id", verifyAuth, controller.RemoveOrder)


module.exports = router