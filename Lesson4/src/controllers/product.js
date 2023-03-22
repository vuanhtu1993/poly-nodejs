import Product from "../models/product";

export const get = async (req, res) => {
    try {
        const data = await Product.find()
        res.send({
            message: "Get sản phẩm thành công",
            data: data
        })
    } catch(err) {
        res.status(500).send({
            message: err
        })
    }
}

export const getById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Product.findById(id)
        res.send({
            message: "Get sản phẩm thành công",
            data: data
        })
    } catch(err) {
        res.status(500).send({
            message: err
        })
    }
}

export const create = async (req, res) => {
    try {
        const body = req.body
        const data = await Product.create(body)
        res.send({
            message: "Tạo sản phẩm thành công",
            data: data
        })
    } catch(err) {
        res.status(500).send({
            message: err
        })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const data = await Product.findByIdAndUpdate(id, body)
        res.send({
            message: "Cập nhật sản phẩm thành công",
            data: data
        })
    } catch(err) {
        res.status(500).send({
            message: err
        })
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Product.findByIdAndDelete(id)
        if(data) {
            res.send({
                message: "Xoá sản phẩm thành công",
                data: data
            })
        } else {
            res.status(400).send({
                message: "Không tồn tại sản phẩm",
            })
        }
        
    } catch(err) {
        res.status(500).send({
            message: err
        })
    }
}