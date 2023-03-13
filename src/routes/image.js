import express from 'express'

const router = express.Router()

router.use((req, res, next) => {
    console.log("Image router");
    next()
})

router.post('/upload-image', (req, res) => {
    const body = req.body
    console.log(body);
    res.end()
})

export default router