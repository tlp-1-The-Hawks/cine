import { Router } from "express";
import { ctrlAddgenre } from "../controllers/genre.controllers.js";

const genrerouter = Router()

genrerouter.post('/genre', ctrlAddgenre)

export {genrerouter}