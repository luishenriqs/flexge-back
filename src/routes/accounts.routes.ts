import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { createUserController } from '../modules/accounts/controllers/Create'
import { authenticateController } from '../modules/accounts/controllers/Authenticate'
import { listUserController } from '../modules/accounts/controllers/List'

const accountsRoutes = Router()

accountsRoutes.post('/create', (request, response) =>
    createUserController.handle(request, response)
)

accountsRoutes.post('/login', (request, response) =>
    authenticateController.handle(request, response)
)

accountsRoutes.get('/list', ensureAuthenticated, (_, response) =>
    listUserController.handle(response)
)

export { accountsRoutes }
