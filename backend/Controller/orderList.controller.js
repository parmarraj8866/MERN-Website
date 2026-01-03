const OrderList = require("../Model/orderlist.model")

exports.CreateorderList = async (req, res) => {
    const { name, category, color, size, price, discount, gender, cloth_image } = req.body
    // const cloth_image = req?.file?.filename 
    const orderList = await OrderList.create({ name, category, color, size, price, discount, gender, cloth_image })
    res.send({
        suceess: true,
        orderList
    })
}


exports.GetOrderList = async (req, res) => {
    const orderList = await OrderList.find()
    res.send({
        suceess: true,
        orderList
    })
}


exports.RemoveOrder = async(req, res) => {
    const {id} = req.params
    const orderList = await OrderList.findByIdAndDelete(id)
    res.json({
        success : true,
        message : "Order Deleted!"
    })
}