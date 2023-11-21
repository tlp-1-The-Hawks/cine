import { Router } from "express";
import { ctrlAddHall, ctrlDeleteHall, ctrlGetAllHallByCinemaId } from "../controllers/hall.controllers.js";
import { createHallSchema } from "../models/schemas/hall.schema.js";
import { validator } from "../middlewares/validator.js";

const hallrouter = Router();

hallrouter.post('/hall/:cinemaId', createHallSchema, validator, ctrlAddHall);

hallrouter.get('/hall/:cinemaId', ctrlGetAllHallByCinemaId);

hallrouter.delete('/hall/:id', ctrlDeleteHall)

export { hallrouter }