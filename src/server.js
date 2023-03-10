const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const productRouter = require('./routes/product')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Logger
app.use(morgan("combined"))

// Static file
app.use(express.static(path.join(__dirname, "public")))

// Router
app.use('/api', productRouter)


app.listen(8000, () => {
    console.log("Server running on port 8000");
})