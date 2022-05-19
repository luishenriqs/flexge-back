import 'reflect-metadata'
import dotenv from 'dotenv'
dotenv.config()
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'express-async-errors'
import { router } from './routes'
import { AppError } from './utils/AppError'

const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            })
        }

        return response.status(500).json({
            status: 'error',
            message: `Internal server error - ${err.message}`,
        })
    }
)

const user = process.env.MONGO_USER
const password = process.env.MONGO_PASSWORD

mongoose
    .connect(
        `mongodb+srv://${user}:${password}@cluster0.pyxbt.mongodb.net/flexgedatabase?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Connected database!')
        console.log('Server running port 3333!')
        app.listen(3333)
    })
    .catch((error) => console.log(error))

// Gracefull shutting down
// process.on('uncaughtException', (err: Error) => {
//     console.log({
//         message: '[MAIN] Uncaught exception, shutting down...',
//         error: err.stack,
//     })
// })
