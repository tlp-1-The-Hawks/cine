import {Router} from 'express'
import { ctrlAddInfoMovie} from '../controllers/infomovie.controllers.js'

const infoMovierouter = Router()

infoMovierouter.post('/information/:cinemaId', ctrlAddInfoMovie)


export {infoMovierouter}