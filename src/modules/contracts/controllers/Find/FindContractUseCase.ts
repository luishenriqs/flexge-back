import { Contract } from '../../../../models/Contract'

interface IRequest {
    state?: string
}

class FindContractUseCase {
    async execute({ state }: IRequest) {
        try {
            const response = await Contract.find(
                {
                    state: `${state}`,
                },
                {
                    socialReason: 1,
                    state: 1,
                    city: 1,
                    phone: 1,
                    email: 1,
                }
            )

            const total_by_state = await Contract.aggregate([
                { $group: { _id: '$state', total: { $sum: 1 } } },
            ])

            return {
                status: 200,
                message: {
                    total_by_state,
                    contracts: {
                        state,
                        response,
                    },
                },
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

export { FindContractUseCase }
