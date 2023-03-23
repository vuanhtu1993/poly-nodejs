import express from 'express'
import mongoose from 'mongoose'
import productRouter from './routers/product'
import bodyParser from 'body-parser'

const app = express()
const port = 8080
// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Connect DB
mongoose.connect("mongodb://localhost:27017/we17317")
.then(() => console.log("Connect to DB successfully"))

// Router
app.use('/api', productRouter)

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
})