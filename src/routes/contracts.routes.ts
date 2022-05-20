import { Router } from 'express'
import { createContractController } from '../modules/contracts/controllers/Create'
import { listContractsController } from '../modules/contracts/controllers/List'
import { findContractController } from '../modules/contracts/controllers/FindContract'
import { updateContractController } from '../modules/contracts/controllers/Update'
import { deleteController } from '../modules/contracts/controllers/Delete'

const contractsRoutes = Router()

contractsRoutes.post('/create', (request, response) =>
    createContractController.handle(request, response)
)

contractsRoutes.get('/list', (request, response) =>
    listContractsController.handle(request, response)
)

contractsRoutes.get('/find', (request, response) =>
    findContractController.handle(request, response)
)

contractsRoutes.patch('/update', (request, response) =>
    updateContractController.handle(request, response)
)

contractsRoutes.delete('/delete/:id', (request, response) =>
    deleteController.handle(request, response)
)

export { contractsRoutes }
