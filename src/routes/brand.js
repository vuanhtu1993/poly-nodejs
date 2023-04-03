import express from 'express'
import { create, get } from '../controllers/brand'

const brandRouter = express.Router()

brandRouter.get('/brands', get)
brandRouter.post('/brands', create)

export default brandRouter