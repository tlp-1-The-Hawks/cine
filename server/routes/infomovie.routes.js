import { Router } from 'express'
import { ctrlAddInfoMovie, ctrlUploadImgMovie } from '../controllers/infomovie.controllers.js'
import { createMovieValidation } from '../models/schemas/movie.shemas.js'
import { validador } from '../middlewares/validator.js'

const infoMovierouter = Router()

infoMovierouter.post('/information/:cinemaId', createMovieValidation, validador, ctrlAddInfoMovie)

infoMovierouter.post('/upload-imgmovi', ctrlUploadImgMovie)

export { infoMovierouter }