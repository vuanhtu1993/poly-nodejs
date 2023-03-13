import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url';
import productRouter from './routes/product.js'
const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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