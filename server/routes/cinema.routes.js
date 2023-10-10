import { Router } from "express";
import { ctrlAddCinema, 
    ctrlGetCinemaById, 
    ctrlgetAllCinema, 
    ctrlDeleteCinema, 
    ctrlEditCinema } from "../controllers/cinema.controllers.js";

const cinemaRouter = Router();

cinemaRouter.post('/cinema', ctrlAddCinema);

cinemaRouter.get('/cinema', ctrlgetAllCinema);

cinemaRouter.get('/cinema/:id', ctrlGetCinemaById)

cinemaRouter.delete('/cinema/:id', ctrlDeleteCinema)

cinemaRouter.put('/cinema/:id', ctrlEditCinema)

export { cinemaRouter };