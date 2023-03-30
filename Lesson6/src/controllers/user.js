import User from "../models/user";
import Joi from 'joi'

const userSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required().messages({
        "string.min" : "Mật khẩu không hợp lệ",
        "string.empty": "Trường dữ liệu bắt buộc"
    }),
    confirmPassword: Joi.ref('password')

})

export const signup = async (req, res) => {
    try {
        const body = req.body
        const {error} =  userSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.details[0].message
            })
        } else {
            const data = await User.create(body)
            res.send({
                message: "Đăng kí thành công",
                data: data
            })
        }
    } catch(err) {
        res.status(500).send({
            message: err
        })
    }
}