import { Router } from 'express'
import { ctrlAddInfoMovie, ctrlDeleteInfoById, ctrlUploadImgMovie } from '../controllers/infomovie.controllers.js'
import { createMovieValidation } from '../models/schemas/movie.shemas.js'
import { validator } from '../middlewares/validator.js'

const infoMovierouter = Router()

infoMovierouter.post('/information/:cinemaId', createMovieValidation, validator, ctrlAddInfoMovie)

infoMovierouter.post('/upload-imgmovi', ctrlUploadImgMovie)

infoMovierouter.delete('/information/:id', ctrlDeleteInfoById)

export { infoMovierouter }