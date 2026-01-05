const OrderList = require("../Model/orderlist.model")

exports.CreateorderList = async (req, res) => {
    const { product_id, qty } = req.body

    const findProduct = await OrderList.findOne({
        product_id
    })

    if (findProduct) {
        if (qty) {
            findProduct.qty += qty
        } else {
            findProduct.qty += 1
        }
        await findProduct.save()  // not undarstand save query
        res.send({
            suceess: true,
            findProduct
        })
    } else {
        const orderList = await OrderList.create({
            product_id,
            qty
        })

        res.send({
            suceess: true,
            orderList
        })
    }


}


exports.GetOrderList = async (req, res) => {
    const orderList = await OrderList.find().populate("product_id")
    res.send({
        suceess: true,
        orderList
    })
}


exports.RemoveOrder = async (req, res) => {
    const { id } = req.params
    const orderList = await OrderList.findByIdAndDelete(id)
    res.json({
        success: true,
        message: "Order Deleted!"
    })
}