import { Router } from "express";
import { ctrlAddgenre, ctrlGetAllGenre } from "../controllers/genre.controllers.js";

const genrerouter = Router()

genrerouter.post('/genre', ctrlAddgenre)
genrerouter.get('/genre', ctrlGetAllGenre)

export {genrerouter}