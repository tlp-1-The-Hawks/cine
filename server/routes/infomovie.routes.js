import {Router} from 'express'
import { ctrlAddInfoMovie, ctrlUploadImgMovie} from '../controllers/infomovie.controllers.js'

const infoMovierouter = Router()

infoMovierouter.post('/information/:cinemaId', ctrlAddInfoMovie)

infoMovierouter.post('/upload-imgmovi', ctrlUploadImgMovie)

export {infoMovierouter}