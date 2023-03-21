import Joi from "joi"
import {object, string, number} from 'yup'
import productSchema from "../models/product"
const books = [
    {id: 1, name: "Book 1", price: 100},
    {id: 2, name: "Book 2", price: 100},
    {id: 3, name: "Book 3", price: 100},
]

export const getProduct = async (req, res) => {
    const data = await productSchema.find()
    res.send({
        message: "success",
        data: data
    })
    res.end()
}

export const getProductById = async (req, res) => {
    const id = req.params.id
    const data = await productSchema.findById(id)
    if (data) {
        res.send({
            message: "success",
            data: data
        })
    } else {
        res.status(404).send("Sản phẩm không tồn tại")
    }
    res.end()
}

const productValidate = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": "{#label} Trường dữ liệu bắt buộc"
    }),
    price: Joi.number().required(),
    thumbnail: Joi.string(),
    description: Joi.string()
})
// const productSchema = object({
//     name: string().required("Tên sản phẩm bắt buộc"),
//     price: number().required("Giá sản phẩm bắt buộc")
// })
export const createProduct = async (req, res) => {
    try {
        const data = req.body
        // console.log(data, typeof data,"dataaaaa");
        const {error} = productValidate.validate(data, {abortEarly: false})
        if(error) {
            res.status(400).send({
                message: error.details?.map(e => e.message)
            })
            res.end()
        } else {
            // books.push(data)
            const product = await productSchema.create(data);
            res.send({
                message: "Thêm sản phẩm thành công",
                data: product
            })
            res.end()
        } 
    } catch(err) {
        res.status(500).end({
            message: err.message
        })
    }
      
}