import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import path from 'path'
import fs from 'fs'
import multer from 'multer'
import sharp from 'sharp'
import {uuid} from 'uuidv4'

import { fileURLToPath } from 'url';
import productRouter from './routes/product.js'
import imageRouter from './routes/image.js'
const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Logger
app.use(morgan("combined"))

// Static file
app.use(express.static(path.join(__dirname, "public")))

// Multer
const upload = multer({
    limits: {
      fileSize: 4 * 1024 * 1024,
    }
  });
// app.use(upload.array()); 


// Router
app.use('/api', productRouter)
app.use('/api', imageRouter)


app.listen(8000, () => {
    console.log("Server running on port 8000");
})