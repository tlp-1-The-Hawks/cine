import {Router} from 'express'
import { ctrlAddInfoMovie} from '../controllers/infomovie.controllers.js'

const infoMovierouter = Router()

infoMovierouter.post('/infomovie/:cinemaId', ctrlAddInfoMovie)


export {infoMovierouter}