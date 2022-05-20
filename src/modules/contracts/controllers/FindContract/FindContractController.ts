import { Request, Response } from 'express'
import { FindContractUseCase } from './FindContractUseCase'

interface IRequest {
    state?: string
}

class FindContractController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { state } = request.query as IRequest

            const resp = await new FindContractUseCase().execute({
                state,
            })

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { FindContractController }
