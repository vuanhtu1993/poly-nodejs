// const express = require('express')
import express from "express"
const router = express.Router()

const data = [
    {id: 1, name: "Chuột", price: 100},
    {id: 2, name: "Bàn phím", price: 200},
    {id: 3, name: "Màn hình", price: 500},
]

router.get('/products', (req, res) => {
    res.send(data)
})

// module.exports = router
export default router