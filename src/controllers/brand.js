import Brand from '../models/brand'

export const get = async (req, res) => {
    try {
        const data = await Brand.find()
        return res.send({
            data: data
        })
    } catch(err) {
        return res.send({
            message: err
        })
    }
}

export const create = async (req, res) => {
    try {
        const body = req.body
        const data = await Brand.create(body)
        res.send({
            message: "Thêm mới thành công",
            data: data
        })
    } catch(err) {
        return res.send({
            message: err
        })
    }
}