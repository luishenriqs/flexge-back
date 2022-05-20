import { Request, Response } from 'express'
import { UpdateContractUseCase } from './UpdateContractUseCase'

class UpdateContractController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {
                id,
                country,
                state,
                city,
                documentNumber,
                socialReason,
                address,
                district,
                number,
                zipCode,
                email,
                phone,
                company,
            } = request.body

            const resp = await new UpdateContractUseCase().execute({
                id,
                country,
                state,
                city,
                documentNumber,
                socialReason,
                address,
                district,
                number,
                zipCode,
                email,
                phone,
                company,
            })

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { UpdateContractController }
