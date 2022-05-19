import { Contract } from '../../../../models/Contract'

interface IContract {
    country: String
    state: String
    city: String
    documentNumber: Number
    socialReason: String
    address: String
    district: String
    number: Number
    zipCode: String
    email: String
    phone: Number
    startsIn: Date
    endsIn: Date
    dueDay: Date
    company: String
}

class CreateUserUseCase {
    async execute(contract: IContract) {
        try {
            const response = await Contract.create(contract)

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

export { CreateUserUseCase }
