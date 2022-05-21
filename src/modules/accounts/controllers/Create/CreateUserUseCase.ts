import { User } from '../../../../models/User'
import { ICreateUserDTO } from './DTO'
import { AppError } from '../../../../utils/AppError'
import { Validator } from '../../../../utils/Validator'
class CreateUserUseCase {
    async execute(user: ICreateUserDTO) {
        try {
            Validator(
                { userName: String, email: String, password: String },
                user
            )

            const alredyExists = await User.findOne({
                email: user.email,
            })
            if (alredyExists)
                return new AppError('This user has already been registered')

            const response = await User.create(user)

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

export { CreateUserUseCase }
