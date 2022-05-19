import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

interface IRequest {
    country: String
    state: String
    city: String
    documentNumber: Number
    socialReason: String
    address: String
    district: String
    number: Number
    zipCode: String
    email: String
    phone: Number
    startsIn: Date
    endsIn: Date
    dueDay: Date
    company: String
}

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const contract = request.body as IRequest

            const resp = await new CreateUserUseCase().execute(contract)

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { CreateUserController }
