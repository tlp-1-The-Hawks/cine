import { addBooking, getAllBooking, getAllBookingByMovieIdAndCinemaId, getBookingById } from "../models/Booking.models.js"

export const ctrlAddBooking = async (req, res) => {
    try {
        const {
            userId,
            movieId,
            cinemaId
        } = req.params
        const {
            tikets
        } = req.body


        const newBooking = await addBooking(
            userId,
            movieId,
            cinemaId,
            tikets
        )

        res.status(200).json({
            message: 'Booking created'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Erro a add booking'
        })
    }
}

export const ctrlGetAllBooking = async (req, res) => {
    try {
        const bookings = await getAllBooking()

        res.status(200).json(bookings)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error get all booking'
        })
    }

}

export const ctrlGetOneBooking = async (req, res) => {
    try {
        const {
            movieId,
            cinemaId,
            userId
        } = req.params

        const booking = await getBookingById(
            movieId,
            cinemaId,
            userId)

        res.status(200).json(booking)
    } catch (error) {
        res.status(500).json({
            message: 'Error get booking by id'
        })

    }
}

export const ctrlGetAllBookingsByMovieIdAndCinemaId = async (req, res) => {
    try {
        const { movieId, cinemaId } = req.params

        const bookings = await getAllBookingByMovieIdAndCinemaId(movieId, cinemaId)

        res.status(200).json(bookings)
    } catch (error) {
        console.log(error)
        res.status(500).json({

            message: 'error get all bookings by movieId and cinemId'
        })
    }
}