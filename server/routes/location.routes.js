import { ctrlGetLocationByProvince } from "../controllers/location.controllers.js";
import { Router } from "express";

const locationRouter = Router()

locationRouter.get('/location/:provinceId', ctrlGetLocationByProvince)

export {locationRouter}