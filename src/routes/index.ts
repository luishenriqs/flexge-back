import { Router } from 'express'
import { accountsRoutes } from '../routes/accounts.routes'

const router = Router()

try {
    router.use('/account', accountsRoutes)
} catch (error) {
    console.log(error)
}

export { router }
