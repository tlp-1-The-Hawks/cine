import { Router } from "express";
import {
    ctrlAddBooking,
    ctrlGetAllBooking,
    ctrlGetOneBooking
} from "../controllers/booking.controllers.js";

const bookingRouter = Router()

bookingRouter.get('/booking', ctrlGetAllBooking)

bookingRouter.get('/booking/:bookingId', ctrlGetOneBooking)

bookingRouter.post('/booking/:userId/:movieId/:cinemaId', ctrlAddBooking)

export { bookingRouter }