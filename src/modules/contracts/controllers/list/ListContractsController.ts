import { Response } from 'express'
import { ListContractsUseCase } from './ListContractsUseCase'

class ListContractsController {
    async handle(response: Response): Promise<Response> {
        try {
            const resp = await new ListContractsUseCase().execute()

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { ListContractsController }
