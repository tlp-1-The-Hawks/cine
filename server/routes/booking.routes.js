import { Router } from "express";
import { ctrlAddBooking, ctrlGetAllBooking } from "../controllers/booking.controller.js";

const bookingRouter = Router()

bookingRouter.get('/booking', ctrlGetAllBooking)
bookingRouter.post('/booking/:userId/:movieId/:cinemaId', ctrlAddBooking)

export {bookingRouter}