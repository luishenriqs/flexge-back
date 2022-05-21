import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { User } from '../models/User'
import { AppError } from '../utils/AppError'

interface IPayload {
    sub: string
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization

    if (!authHeader) {
        throw new AppError('Token missing', 401)
    }

    const [, token] = authHeader.split(' ')
    const secret = process.env.SECRET_KEY || ''

    try {
        const { sub: user_id } = verify(token, secret) as IPayload

        const user = User.findById(user_id)

        if (!user) {
            throw new AppError('User does not exist!', 401)
        }

        next()
    } catch {
        throw new AppError('Invalid token!', 401)
    }
}
