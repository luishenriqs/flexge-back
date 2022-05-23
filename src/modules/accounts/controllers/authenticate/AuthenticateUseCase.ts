import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { User } from '../../../../models/User'
import { AppError } from '../../../../utils/AppError'
import { Validator } from '../../../../utils/Validator'

class AutheticateUseCase {
    async execute(email: string, password: string) {
        try {
            Validator({ email: String, password: String }, { email, password })

            const user = await User.findOne({
                email: email,
            })
            if (!user)
                return new AppError(
                    'Email or password not found. Please try again later.'
                )

            const checkPassword = await bcrypt.compare(password, user.password)
            if (!checkPassword)
                return new AppError(
                    'Email or password not found. Please try again later.'
                )

            const secret = process.env.SECRET_KEY || ''

            const token = sign(
                {
                    subject: user._id,
                    expiresIn: '1d',
                },
                secret
            )

            const tokenReturn = {
                userName: user.userName,
                email: user.email,
                token,
            }
            return {
                status: 200,
                message: tokenReturn,
            }
        } catch (error) {
            throw {
                status: 500,
                data: error,
            }
        }
    }
}

export { AutheticateUseCase }
