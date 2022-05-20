import { Contract } from '../../../../models/Contract'

interface IRequest {
    page: number
    limit: number
}

class ListContractsUseCase {
    async execute({ page, limit }: IRequest) {
        try {
            const skip = (page - 1) * limit
            const response = await Contract.find()
                .skip(skip)
                .limit(limit)
                .sort({ socialReason: 1 })

            return {
                status: 200,
                message: response,
            }
        } catch (error) {
            console.log('error', error)
            throw {
                status: 500,
                data: error,
            }
        }
    }
}

export { ListContractsUseCase }
