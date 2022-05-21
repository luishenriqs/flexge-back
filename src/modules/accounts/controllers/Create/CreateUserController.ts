import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

interface IRequest {
    userName: String
    email: String
    password: String
    created_at: Date
    updated_at: Date
}

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const user = request.body as IRequest

            const resp = await new CreateUserUseCase().execute(user)

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { CreateUserController }
