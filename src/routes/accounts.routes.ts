import { Router } from 'express'
import { createUserController } from '../modules/accounts/controllers/Create'

const accountsRoutes = Router()

accountsRoutes.post('/create', (request, response) =>
    createUserController.handle(request, response)
)

export { accountsRoutes }
