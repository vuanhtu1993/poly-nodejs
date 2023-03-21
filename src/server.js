import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

import productRouter from './routes/product.js'
import imageRouter from './routes/image.js'
const app = express()

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(express.json())

// Logger
app.use(morgan("combined"))

// Static file
app.use(express.static(path.join(__dirname, "public")))

// Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => console.log("Connect to db successfully"));


// Router
app.use('/api', productRouter)
app.use('/api', imageRouter)

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})

// export const viteNodeApp = app;
