const express = require("express")
const app = express()
const router = require("./Routes/cloth.route")
const orderList = require("./Routes/orderlist.route")
const contactClient = require("./Routes/contact.route")
const dorenv = require("dotenv").config()
const db = require("./Config/db")()
const port = process.env.Port || 5000
const cors = require("cors")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use("/uploads", express.static("uploads"))


app.use("/api/clothes", router)
app.use("/api/orderclothes", orderList)
app.use("/api/contactclient", contactClient)

app.listen(port, console.log(`Server : http://localhost:${port}`))