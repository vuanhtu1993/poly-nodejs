import User from '../models/auth'
import Joi from 'joi'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const salt = bcrypt.genSaltSync(10);

const userSchema = Joi.object({
    name: Joi.string().required().messages({
        
    }),
    email: Joi.string().email().required().messages({
        "string.email": "Email không đúng định dạng"
    }),
    password: Joi.string().min(6).required().messages({
        "string.min": "Mật khẩu không đúng định dạng"
    }),
    repeate_password: Joi.ref('password')
})

export const signup = async (req, res) => {
    // Name
    // Email
    // Password
    // Double check Password
    try {
        const body = req.body
        const {error} = userSchema.validate(body)
        if(!error) {
            const hash = bcrypt.hashSync(body.password, salt)
            const data = await User.create({...body, password: hash})
            res.send({
                message: "Đăng ký thành công",
                data: data
            })
        } else {
            res.status(400).send({
                message: error.details[0].message,
            })
        }
        
    } catch(err) {
        res.status(500).send({
            message: err
        })
    }
}

const signinSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Email không đúng định dạng"
    }),
    password: Joi.string().min(6).required().messages({
        "string.min": "Mật khẩu không đúng định dạng"
    }),
})

export const signin = async(req, res) => {
    try {
        const body = req.body
        const {error} = signinSchema.validate(body)
        if (error) {
            return res.status(400).send({
                message: err
            })
        }

        const user = await User.findOne({email: body.email})
        if (!user) {
            return res.status(400).send({
                message: "Tên đăng nhập hay mật khẩu không chính xác",
            })
        }
        const isValidate = bcrypt.compareSync(body.password, user.password)
        if (!isValidate) {
            return res.status(400).send({
                message: "Tên đăng nhập hay mật khẩu không chính xác",
            })
        }
        const accessToken = jwt.sign({_id: user._id, email: user.email}, "we17317", {expiresIn: "5m"})
        console.log(accessToken, "xxxxxxx");
        return res.send({
            message: "Đăng nhập thành công",
            user,
            accessToken,
        })
    }catch(err) {
        res.status(500).send({
            message: err
        })
    }
}