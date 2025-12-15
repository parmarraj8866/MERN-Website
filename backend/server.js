const express = require("express")
const app = express()
const router = require("./Routes/cloth.route")
const dorenv = require("dotenv").config()
const db = require("./Config/db")()
const port = process.env.Port || 5000
const cors = require("cors")

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

app.use("/api/clothes", router)

app.listen(port, console.log(`Server : http://localhost:${port}`))