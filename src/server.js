import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 8080

mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log("Connected to DB"))

app.listen(port, () => {
    console.log("Server is running on " + port);
})
