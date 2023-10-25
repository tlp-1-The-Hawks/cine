import { Router } from "express";
import { ctrlAddHall } from "../controllers/hall.controllers.js";
const hallrouter = Router();

hallrouter.post('/hall/:cinemaId', ctrlAddHall);

export { hallrouter }