import { sequelize } from "../config/database.js";

export const bookingsXSeatings = sequelize.define(
    'bookingsXseatings',
    {

    }
    ,
    {
        timestamps: false
    }
)

export async function addBookingXseatings(seatings, booking) {
    for (let index = 0; index < seatings.length; index++) {
        const newBookingXseating = await bookingsXSeatings.create({
            seatingId: seatings[index],
            bookingId: booking
        })
    }
}