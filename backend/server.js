const express = require("express")
const app = express()

const dorenv = require("dotenv").config()
const db = require("./Config/db")()
const port = process.env.Port || 5000
const cors = require("cors")
const session = require("express-session")

app.use("/uploads", express.static("uploads"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("trust proxy", 1);

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://raj-webclothes-8866.netlify.app",
    "https://696b3b7a343b64000992ad01--raj-webclothes-8866.netlify.app",
    "https://mern-stack-clothes-website-raj.onrender.com"
  ],
  credentials: true
}));

app.use(session({
  name: "session",
  secret: "mykey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 24 * 60 * 60 * 1000,
    // Don't set domain for cross-origin requests
    domain: process.env.NODE_ENV === "production" ? undefined : "localhost"
  }
}));


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
