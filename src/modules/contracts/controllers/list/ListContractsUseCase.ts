import { Contract } from '../../../../models/Contract'

class ListContractsUseCase {
    async execute() {
        try {
            const response = await Contract.find().sort({ socialReason: 1 })

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
