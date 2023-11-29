import { Router } from "express";
import { ctrlGetDateByCinemaAndMovie } from "../controllers/dateEmissions.controllers.js";
const dateEmissionRouter = Router()

dateEmissionRouter.get('/date/:cinemaId/:movieId', ctrlGetDateByCinemaAndMovie)

export {dateEmissionRouter}