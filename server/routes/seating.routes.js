import { Router } from "express";
import { ctrlAddSeating, ctrlGetSeatingsByDate, ctrlGetSeatingsByHallAndDate } from "../controllers/seating.controllers.js";

const seatingRouter = Router()

seatingRouter.post('/seating/:hallId', ctrlAddSeating)

seatingRouter.get('/seating/:hallId/:dateId', ctrlGetSeatingsByHallAndDate)

seatingRouter.get('/seating/:dateId', ctrlGetSeatingsByDate)

export { seatingRouter }