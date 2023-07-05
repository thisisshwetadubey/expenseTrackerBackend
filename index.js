const express = require("express")
const dotenv = require('dotenv').config()
const app = express()
const connectDB = require("./config/db")

connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use("/",require("./controllers/expense"))

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log("Server listening on", port))