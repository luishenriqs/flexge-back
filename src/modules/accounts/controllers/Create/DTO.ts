interface ICreateUserDTO {
    userName: String
    email: String
    password: String
    created_at?: Date
    updated_at?: Date
}

export { ICreateUserDTO }
