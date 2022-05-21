import { Response } from 'express'
import { ListUserUseCase } from './ListContractsUseCase'

class ListUserController {
    async handle(response: Response): Promise<Response> {
        try {
            const resp = await new ListUserUseCase().execute()

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { ListUserController }
