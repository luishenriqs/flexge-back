import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { createContractController } from '../modules/contracts/controllers/Create'
import { listContractsController } from '../modules/contracts/controllers/List'
import { findContractController } from '../modules/contracts/controllers/Find'
import { updateContractController } from '../modules/contracts/controllers/Update'
import { deleteController } from '../modules/contracts/controllers/Delete'

const contractsRoutes = Router()

contractsRoutes.post('/create', ensureAuthenticated, (request, response) =>
    createContractController.handle(request, response)
)

contractsRoutes.get('/list', ensureAuthenticated, (request, response) =>
    listContractsController.handle(request, response)
)

contractsRoutes.get('/find', ensureAuthenticated, (request, response) =>
    findContractController.handle(request, response)
)

contractsRoutes.patch('/update', ensureAuthenticated, (request, response) =>
    updateContractController.handle(request, response)
)

contractsRoutes.delete(
    '/delete/:id',
    ensureAuthenticated,
    (request, response) => deleteController.handle(request, response)
)

export { contractsRoutes }
