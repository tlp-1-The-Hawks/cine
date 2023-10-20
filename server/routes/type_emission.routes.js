import { Router } from 'express'
import { ctrlGetAllTypesEmissions } from '../controllers/type_emission.controllers.js';

const type_emissionRouter = Router()

type_emissionRouter.get('/type-emission', ctrlGetAllTypesEmissions)

export { type_emissionRouter };