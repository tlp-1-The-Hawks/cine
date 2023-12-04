import { Router } from "express";
import {
    ctrlAddBooking,
    ctrlGetAllBooking,
    ctrlGetAllBookingsByDateId,
    ctrlGetAllBookingsByMovieIdAndCinemaId,
    ctrlGetOneBooking
} from "../controllers/booking.controllers.js";

const bookingRouter = Router()

bookingRouter.get('/booking', ctrlGetAllBooking)

bookingRouter.get('/booking/:movieId/:cinemaId/:userId', ctrlGetOneBooking)

bookingRouter.post('/booking/:userId/:movieId/:cinemaId', ctrlAddBooking)

bookingRouter.get('/booking/:movieId/:cinemaId', ctrlGetAllBookingsByMovieIdAndCinemaId)

bookingRouter.get('/booking/:dateId', ctrlGetAllBookingsByDateId)

export { bookingRouter }