import { Router } from "express";
import { createOrder, receiveWebhook } from "../controllers/payment.controllers.js";

const paymentsRoutes = Router();

paymentsRoutes.post('/create-order/:cinemaId/:movieId/:idUser/:price', createOrder)

paymentsRoutes.get('success', (req, res) => res.send('success'))

paymentsRoutes.get('failure', (req, res) => res.send('failure'))

paymentsRoutes.get('pending', (req, res) => res.send('pending'))

paymentsRoutes.post('/webhook/:movieId/:cinemaId/:userId/:price', receiveWebhook)

export default paymentsRoutes