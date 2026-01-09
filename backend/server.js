const express = require("express")
const app = express()

const dorenv = require("dotenv").config()
const db = require("./Config/db")()
const port = process.env.Port || 5000
const cors = require("cors")
const cookieSession = require("cookie-session")

app.use("/uploads", express.static("uploads"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors(
    {
<<<<<<< HEAD
 origin: ["https://raj-webclothes-8866.netlify.app"],
=======
        origin: ["http://localhost:5173", "https://raj-webclothes-8866.netlify.app"],
>>>>>>> c251269 (Front-End & Back-End Update)
        credentials: true
    }
))
app.use(cookieSession({
    name: "session",
    keys: [process.env.SESSION_KEY],
     httpOnly: true,
  secure: true,          
  sameSite: "none",    
    maxAge: 24 * 60 * 60 * 1000
}))



// routes 
const clothrouter = require("./Routes/cloth.route")
const orderList = require("./Routes/orderlist.route")
const contactClient = require("./Routes/contact.route")
const userAuth = require("./Routes/user.route")

// Apis
app.use("/api/clothes", clothrouter)
app.use("/api/orderclothes", orderList)
app.use("/api/contactclient", contactClient)
app.use("/api/user", userAuth)




app.listen(port, console.log(`Server : http://localhost:${port}`))
