import { bookingModel } from '../models/Booking.models.js'
import mercadopago from "mercadopago";

export const createOrder = async (req, res) => {
  const { movieId, cinemaId, idUser, price, selectedDate } = req.params;

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
        },
      ],
      notification_url: `https://47b8-138-121-113-14.ngrok.io/api/webhook/${movieId}/${cinemaId}/${idUser}/${price}/${selectedDate}`,
      back_urls: {
        success: "http://localhost:3000/informacion-pelicula",
        // pending: "https://e720-190-237-16-208.sa.ngrok.io/pending",
        failure: "http://localhost:3000/informacion-pelicula",
      },
    });

    // console.log(result);

    // res.json({ message: "Payment creted" });
    res.json(result.body);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const receiveWebhook = async (req, res) => {
  try {
    const { movieId, cinemaId, userId, price, dateEmissionId } = req.params;
    console.log(movieId, cinemaId, userId, price);
    const payment = req.query;
    if (payment.type === 'payment') {
      const paymentId = payment['data.id']
      console.log(paymentId);
      await bookingModel.create({ paymentId, movieId, cinemaId, userId, price, dateEmissionId });
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
