import jwt from 'jsonwebtoken'
import User from '../models/auth'

const authenticate = (req, res, next) => {
    try {
        const body = req.body
        const accessToken = body.accessToken
        if (!accessToken) {
            return res.status(401).send({
                message: "Lỗi xác thực"
            })
        }
        const {_id} = jwt.verify(accessToken, "we17317")
        const user = User.findOne({_id})
        if (!user) {
            return res.status(401).send({
                message: "Lỗi xác thực"
            })
        }
        next()
    } catch(err) {
        res.status(500).send({
            message: err
        })
    }
}

export default authenticate