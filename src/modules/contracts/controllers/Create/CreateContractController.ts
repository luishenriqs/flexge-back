import { Request, Response } from 'express'
import { CreateContractUseCase } from './CreateContractUseCase'
import { ICreateContractDTO } from './DTO'

class CreateContractController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const contract = request.body as ICreateContractDTO

            const resp = await new CreateContractUseCase().execute(contract)

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { CreateContractController }
