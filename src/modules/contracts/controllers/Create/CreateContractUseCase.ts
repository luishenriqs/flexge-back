import { Contract } from '../../../../models/Contract'
import { ICreateContractDTO } from './DTO'
import { AppError } from '../../../../utils/AppError'
import { Validator } from '../../../../utils/Validator'

class CreateContractUseCase {
    async execute(contract: ICreateContractDTO) {
        try {
            Validator(
                {
                    state: String,
                    city: String,
                    documentNumber: Number,
                    socialReason: String,
                    email: String,
                    phone: Number,
                    company: String,
                },
                contract
            )

            const alredyExists = await Contract.findOne({
                socialReason: contract.socialReason,
            })
            if (alredyExists)
                return new AppError(
                    'There is already a contract for this company'
                )

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
