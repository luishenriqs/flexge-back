import { Contract } from '../../../../models/Contract'

class DeleteUseCase {
    async execute(id: string) {
        try {
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
