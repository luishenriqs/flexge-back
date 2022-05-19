import { Request, Response } from 'express'
import { AutheticateUseCase } from './AuthenticateUseCase'

class AuthenticateController {
    constructor(private autheticateUseCase: AutheticateUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.autheticateUseCase.execute()

            return response
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { AuthenticateController }
