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

            const alredyExists = await Contract.findOne({
                socialReason: contract.socialReason,
            })
            if (alredyExists)
                return {
                    status: 400,
                    message: 'This company already has a valid contract',
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
