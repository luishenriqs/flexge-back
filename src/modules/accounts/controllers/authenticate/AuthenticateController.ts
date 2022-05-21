import { Request, Response } from 'express'
import { AutheticateUseCase } from './AuthenticateUseCase'

interface IRequest {
    email: string
    password: string
}

class AuthenticateController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password } = request.body as IRequest
            const resp = await new AutheticateUseCase().execute(email, password)

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { AuthenticateController }
