const router = require("express").Router()
const controller = require("../Controller/cloth.controller")
const upload = require("../utils/upload")

router.post("/", upload.single("cloth_image"), controller.CreateClothes)
router.get("/", controller.getClothes)
router.put("/:id", controller.updateClothes)
router.delete("/:id", controller.deleteClothes)
router.get("/:id", controller.getSingleCloth)


module.exports = router