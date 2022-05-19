import { Contract } from '../../../../models/Contract'

class findByIdUseCase {
    async execute(id: string) {
        try {
            const response = await Contract.find({ _id: id })

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

export { findByIdUseCase }
