import { Router } from "express";
import { createOrder, receiveWebhook } from "../controllers/payment.controllers.js";

const paymentsRoutes = Router();

paymentsRoutes.post('/create-order', createOrder)

paymentsRoutes.get('success', (req, res) => res.send('success'))

paymentsRoutes.get('failure', (req, res) => res.send('failure'))

paymentsRoutes.get('pending', (req, res) => res.send('pending'))

paymentsRoutes.post('/webhook', receiveWebhook)

export default paymentsRoutes