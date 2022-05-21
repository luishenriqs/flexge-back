import { User } from '../../../../models/User'

class ListUserUseCase {
    async execute() {
        try {
            const response = await User.find(
                {},
                { _id: 0, userName: 1, email: 1 }
            ).sort({
                userName: 1,
            })

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

export { ListUserUseCase }
