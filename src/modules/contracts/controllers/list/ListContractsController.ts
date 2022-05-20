import { Request, Response } from 'express'
import { ListContractsUseCase } from './ListContractsUseCase'

class ListContractsController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const page = Number(request.query.page)
            const limit = Number(request.query.limit)
            const resp = await new ListContractsUseCase().execute({
                page: page || 1,
                limit: limit || 3,
            })

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { ListContractsController }
