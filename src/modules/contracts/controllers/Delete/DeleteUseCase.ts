import { Contract } from '../../../../models/Contract'
import { Validator } from '../../../../utils/Validator'

class DeleteUseCase {
    async execute(id: string) {
        try {
            Validator({ id: String }, id)
            await Contract.deleteOne({ _id: id })

            return {
                status: 200,
                message: 'Successfully deleted one contract.',
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

export { DeleteUseCase }
