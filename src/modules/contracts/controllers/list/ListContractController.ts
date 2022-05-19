import { Response } from 'express'
import { ListContractUseCase } from './ListContractUseCase'

class ListContractController {
    async handle(response: Response): Promise<Response> {
        try {
            const resp = await new ListContractUseCase().execute()

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { ListContractController }
