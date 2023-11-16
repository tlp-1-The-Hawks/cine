import { Router } from 'express'
import { ctrlAddRequestCine, ctrlDeleteCine, ctrlGetRequestCine } from '../controllers/request_cine.controllers.js'
import { createRequestCineSchema } from '../models/schemas/request_cine.schema.js'
import { validador } from '../middlewares/validator.js'

const requestCineRouter = Router()

requestCineRouter.post('/request-cine', createRequestCineSchema, validador, ctrlAddRequestCine)

requestCineRouter.get('/request-cine', ctrlGetRequestCine)

requestCineRouter.delete('/request-cine/:id', ctrlDeleteCine)

export { requestCineRouter }