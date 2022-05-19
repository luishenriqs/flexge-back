import { Router } from 'express'
import { createContractController } from '../modules/contracts/controllers/Create'
import { listContractController } from '../modules/contracts/controllers/list'
import { findByIdController } from '../modules/contracts/controllers/findById'

const contractsRoutes = Router()

contractsRoutes.post('/create', (request, response) =>
    createContractController.handle(request, response)
)

contractsRoutes.get('/list', (_, response) =>
    listContractController.handle(response)
)

contractsRoutes.get('/findById/:id', (request, response) =>
    findByIdController.handle(request, response)
)

export { contractsRoutes }
