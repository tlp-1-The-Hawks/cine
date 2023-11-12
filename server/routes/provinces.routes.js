import {Router} from 'express'
import { ctrlGetAllProvinces } from '../controllers/province.controllers.js'

const provinceRouter = Router()

provinceRouter.get('/province', ctrlGetAllProvinces)

export {provinceRouter}