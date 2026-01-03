const router = require("express").Router()
const controller = require("../Controller/orderList.controller")
const upload = require("../utils/upload")

router.post("/", upload.single("cloth_image"), controller.CreateorderList)
router.get("/", controller.GetOrderList)
router.delete("/:id", controller.RemoveOrder)


module.exports = router