import { User } from '../../../../models/User'
import { ICreateUserDTO } from './DTO'
import bcrypt from 'bcrypt'
import { AppError } from '../../../../utils/AppError'
import { Validator } from '../../../../utils/Validator'
class CreateUserUseCase {
    async execute(user: ICreateUserDTO) {
        try {
            Validator(
                { userName: String, email: String, password: String },
                user
            )

            const userName = user.userName
            const email = user.email
            const password = user.password

            const alredyExists = await User.findOne({
                email: email,
            })
            if (alredyExists)
                return new AppError('This user has already been registered')

            const salt = await bcrypt.genSalt(12)
            const hash = await bcrypt.hash(String(password), salt)

            const response = await User.create({
                userName,
                email,
                password: hash,
            })

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
