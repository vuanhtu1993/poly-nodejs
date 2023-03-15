import express from 'express'
import multer from 'multer'
import sharp from 'sharp'
import path from 'path'
import { uuid } from 'uuidv4'
import { __dirname } from '../server'
import { getRandomFileName } from '../ultilities'

const router = express.Router()

// Multer
const upload = multer({
    limits: {
        fileSize: 4 * 1024 * 1024,
    }
});

router.post('/upload-image', upload.single('image'), async function (req, res) {
    const imageName = getRandomFileName() + ".png"
    const imagePath = path.join(__dirname, `/public/${imageName}`);
    await sharp(req.file.buffer).toFile(imagePath)
    res.end(imageName)
});

export default router