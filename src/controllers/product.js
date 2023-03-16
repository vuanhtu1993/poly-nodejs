import Joi from "joi"
import {object, string, number} from 'yup'
const books = [
    {id: 1, name: "Book 1", price: 100},
    {id: 2, name: "Book 2", price: 100},
    {id: 3, name: "Book 3", price: 100},
]

export const getProduct = (req, res) => {
    res.send({
        message: "success",
        data: books
    })
    res.end()
}

export const getProductById = (req, res) => {
    const id = req.params.id
    const book = books.find(item => item.id == id)
    if (book) {
        res.send({
            message: "success",
            data: book
        })
    } else {
        res.status(404).send("Sản phẩm không tồn tại")
    }
    res.end()
}

const productSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": "{#label} Trường dữ liệu bắt buộc"
    }),
    price: Joi.number().required()
})
// const productSchema = object({
//     name: string().required("Tên sản phẩm bắt buộc"),
//     price: number().required("Giá sản phẩm bắt buộc")
// })
export const createProduct = (req, res) => {
    try {
        const data = req.body
        const {error} = productSchema.validate(data, {abortEarly: false})
        if(error) {
            res.status(400).send({
                message: error.details?.map(e => e.message)
            })
            res.end()
        } else {
            books.push(data)
            res.send(books)
            res.end()
        } 
    } catch(err) {
        res.status(500).end({
            message: err
        })
    }
      
}