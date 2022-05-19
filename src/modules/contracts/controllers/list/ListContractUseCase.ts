import { Contract } from '../../../../models/Contract'

class ListContractUseCase {
    async execute() {
        try {
            const response = await Contract.find()

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

export { ListContractUseCase }
