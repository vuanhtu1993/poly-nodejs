import User from "../models/user";
import Joi from 'joi'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const salt = bcrypt.genSaltSync(10);

const userSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required().messages({
        "string.min": "Mật khẩu không hợp lệ",
        "string.empty": "Trường dữ liệu bắt buộc"
    }),
    confirmPassword: Joi.ref('password')

})

export const signup = async (req, res) => {
    try {
        const body = req.body
        const { error } = userSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.details[0].message
            })
        } else {
            const hash = bcrypt.hashSync(body.password, salt);
            const data = await User.create({ ...body, password: hash })
            res.send({
                message: "Đăng kí thành công",
                data: data
            })
        }
    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}

const userSigninSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

export const signin = async (req, res) => {
    try {
        const body = req.body
        const { error } = userSigninSchema.validate(body)
        // Validate
        if (error) {
            return res.status(400).send({
                message: error.details[0].message
            })
            // res.end()
        }
        const user = await User.findOne({ email: body.email })
        if (!user) {
            return res.status(400).send({
                message: "Tên đăng nhập hoặc mật khẩu sai"
            })
        }
        const isValidate = bcrypt.compareSync(body.password, user.password)
        if (!isValidate) {
            return res.status(400).send({
                message: "Tên đăng nhập hoặc mật khẩu sai"
            })
        }
        const accessToken = jwt.sign({_id: user._id}, "we17317", {expiresIn: "5m"})
        res.send({
            message: "Đăng nhập thành công",
            data: {
                user,
                accessToken
            }
        })
        // if (error) {
        //     res.status(400).send({
        //         message: error.details[0].message
        //     })
        // } else {
        //     const user = await User.findOne({email: body.email})
        //     console.log(user);
        //     if(user) {
        //         if(bcrypt.compareSync(body.password, user.password)) {
        //             res.send({
        //                 message: "Đăng nhập thành công"
        //             }) 
        //         } else {
        //             res.status(400).send({
        //                 message: "Tên đăng nhập hoặc mật khẩu sai"
        //             })  
        //         }
        //     } else {
        //         res.status(400).send({
        //             message: "Tên đăng nhập hoặc mật khẩu sai"
        //         })  
        //     }
        // }
    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}