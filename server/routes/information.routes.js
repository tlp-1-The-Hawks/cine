import { Router } from 'express'
import { ctrlAddInfoMovie, ctrlDeleteInfoById, ctrlGetOneInfo, ctrlUpdateInfo, ctrlUploadImgMovie } from '../controllers/information.controllers.js'
import { createMovieValidation } from '../models/schemas/movie.shemas.js'
import { validator } from '../middlewares/validator.js'

const informationRouter = Router()

informationRouter.post('/information/:cinemaId', createMovieValidation, validator, ctrlAddInfoMovie)

informationRouter.put('/information/:cinemaId/:infoId/:movieId', createMovieValidation, validator, ctrlUpdateInfo)

informationRouter.post('/upload-imgmovi', ctrlUploadImgMovie)

informationRouter.delete('/information/:id', ctrlDeleteInfoById)

informationRouter.get('/information/:id', ctrlGetOneInfo)

export { informationRouter }