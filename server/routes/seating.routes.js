import { Router } from "express";
import { ctrlAddSeating, ctrlGetSeatingsByHallAndDate } from "../controllers/seating.controllers.js";

const seatingRouter = Router()

seatingRouter.post('/seating/:hallId', ctrlAddSeating)

seatingRouter.get('/seating/:hallId/:dateId', ctrlGetSeatingsByHallAndDate)

export { seatingRouter }