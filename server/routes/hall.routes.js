import { Router } from "express";
import { ctrlAddHall, ctrlGetAllHallByCinemaId } from "../controllers/hall.controllers.js";
const hallrouter = Router();

hallrouter.post('/hall/:cinemaId', ctrlAddHall);

hallrouter.get('/hall/:cinemaId', ctrlGetAllHallByCinemaId);

export { hallrouter }