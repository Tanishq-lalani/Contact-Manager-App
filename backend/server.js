const express = require('express')
const connectDb = require('./config/mongoDb')
const app = express()
const dotenv = require('dotenv').config()

connectDb()
const port = process.env.PORT || 4000


app.use(express.json())
app.use('/api/user', require("./routes/userRoutes"))

app.listen(port, ()=>{
    console.log("Port is running in:", port)
})


