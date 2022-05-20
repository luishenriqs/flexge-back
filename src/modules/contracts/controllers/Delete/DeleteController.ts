import { Request, Response } from 'express'
import { DeleteUseCase } from './DeleteUseCase'

class DeleteController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id

            const resp = await new DeleteUseCase().execute(id)

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { DeleteController }
