import jwt from 'jsonwebtoken'

const authenticate = (req, res, next) => {
    try {
        let accessToken = req.headers.authorization
        accessToken = accessToken.split(" ")[1]
        const {_id} = jwt.verify(accessToken, "we17317")
        next()
    } catch(err) {
        res.status(500).send({
            message: err
        })
    }
}

export default authenticate