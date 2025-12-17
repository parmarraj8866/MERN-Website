const Clothes = require("../Model/cloth.model")

exports.CreateClothes = async (req, res) => {
    const { name, category, color, size, price, discount, gender } = req.body
    // const image = req.file.filename 
    const clothes = await Clothes.create({ name, category, color, size, price, discount, gender })
    res.send({
        suceess: true,
        clothes
    })
}

exports.getClothes = async (req, res) => {
    const clothes = await Clothes.find()
    res.json({
        suceess: true,
        clothes
    })
}

exports.updateClothes = async (req, res) => {
    const { id } = req.params
    const { name, category, color, size, price, discount, gender } = req.body
    const clothes = await Clothes.findByIdAndUpdate(id, { name, category, color, size, price, discount, gender })
    res.send({
        success: true,
        clothes
    })
}

exports.deleteClothes = async (req, res) => {
    const { id } = req.params
    await Clothes.findByIdAndDelete(id)
    res.send({
        suceess: true,
        message: "Cloth Deleted!"
    })
}

exports.getSingleCloth = async (req, res) => {
    const { id } = req.params
    const cloth = await Clothes.findById(id)
    res.send({
        success: true,
        cloth
    })
}
