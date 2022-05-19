import { Contract } from '../../../../models/Contract'
import { ICreateContractDTO } from './DTO'

class CreateContractUseCase {
    async execute(contract: ICreateContractDTO) {
        try {
            if (!contract.socialReason)
                return {
                    status: 400,
                    message: 'The Social Reason field is required',
                }

            const response = await Contract.create(contract)

            return {
                status: 201,
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

export { CreateContractUseCase }
