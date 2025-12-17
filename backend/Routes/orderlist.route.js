const router = require("express").Router()
const controller = require("../Controller/orderList.controller")

router.post("/", controller.CreateorderList)
router.get("/", controller.GetOrderList)
router.delete("/:id", controller.RemoveOrder)


module.exports = router