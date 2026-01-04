const router = require("express").Router()
const controller = require("../Controller/cloth.controller")
const { verifyAuth } = require("../Middleware/verifyAuth.middlewar")
const upload = require("../utils/upload")

router.post("/", verifyAuth, upload.single("cloth_image"), controller.CreateClothes)
router.get("/", verifyAuth, controller.getClothes)
router.put("/:id", verifyAuth, controller.updateClothes)
router.delete("/:id", verifyAuth, controller.deleteClothes)
router.get("/:id", verifyAuth, controller.getSingleCloth)


module.exports = router