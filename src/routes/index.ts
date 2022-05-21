import { Router } from 'express'
import { accountsRoutes } from '../routes/accounts.routes'
import { contractsRoutes } from '../routes/contracts.routes'

const router = Router()

try {
    router.use('/accounts', accountsRoutes)
    router.use('/contracts', contractsRoutes)
} catch (error) {
    console.log(error)
}

export { router }
