import { Router } from "express";
import { ctrlAddSeating } from "../controllers/seating.controllers.js";

const seatingRouter = Router()

seatingRouter.post('/seating/:hallId', ctrlAddSeating)

export {seatingRouter}