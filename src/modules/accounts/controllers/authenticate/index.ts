import { AuthenticateController } from './AuthenticateController'
import { AutheticateUseCase } from './AuthenticateUseCase'

const autheticateUseCase = new AutheticateUseCase()
const authenticateController = new AuthenticateController(autheticateUseCase)

export { authenticateController }
