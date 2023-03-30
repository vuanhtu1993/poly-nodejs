import express from "express";
import mongoose from 'mongoose'
import bodyParser from "body-parser";

import userRouter from "./routers/user";

const app = express()
const port = 8080

// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Router
app.use('/auth', userRouter)

// MongoDB
mongoose.connect("mongodb://localhost:27017/we17317")
.then(() => console.log("Connected to DB"))

app.listen(port, () => {
    console.log("Server is running on " + port);
})