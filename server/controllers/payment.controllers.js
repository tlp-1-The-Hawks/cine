
import { bookingModel } from '../models/Booking.models.js';
import { addBookingXseatings } from '../models/BookingsXSeatings.js';
import { addDateEmissionXseatings } from '../models/DateEmissionsXSeatings.js';
import mercadopago from "mercadopago";

export const createOrder = async (req, res) => {
  const { movieId, cinemaId, idUser, price, selectedDate } = req.params;
  const { seatOccupiedId } = req.body;

  mercadopago.configure({
    access_token: 'APP_USR-404212168429405-100814-0deccd0b6f09ee5ef36fe7e6a21b05f8-1500511378',
  });

  try {
    const result = await mercadopago.preferences.create({
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          currency_id: "ARS",
          quantity: Number(req.body.quantity),
          seating: req.body.seating
        },
      ],
      notification_url: `https://6290-138-121-113-13.ngrok.io/api/webhook/${movieId}/${cinemaId}/${idUser}/${price}/${selectedDate}/${seatOccupiedId}`,
      back_urls: {
        success: "http://localhost:3000/",
        failure: "http://localhost:3000/",
      },
    });



    return res.json(result.body);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const receiveWebhook = async (req, res) => {
  try {
    const { movieId, cinemaId, userId, price, dateEmissionId, seatOccupiedId } = req.params;

    const seatingId = (seatOccupiedId.split("-")).map(id => parseInt(id))

    const payment = req.query;
    if (payment.type === 'payment') {
      const paymentId = payment['data.id'];
      console.log(paymentId);
      const booking = await bookingModel.create({ paymentId, movieId, cinemaId, userId, price, dateEmissionId });
      const newSeatingXDate = await addDateEmissionXseatings(seatingId, dateEmissionId)
      const newBookingXseating = await addBookingXseatings(seatingId, booking.id)
    }

    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
