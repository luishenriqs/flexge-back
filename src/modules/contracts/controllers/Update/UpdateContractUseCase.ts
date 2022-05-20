import { Contract } from '../../../../models/Contract'

interface IRequest {
    id: string
    country?: string
    state?: string
    city?: string
    documentNumber?: string
    socialReason?: string
    address?: string
    district?: string
    number?: string
    zipCode?: string
    email?: string
    phone?: string
    company?: string
}

class UpdateContractUseCase {
    async execute({
        id,
        country,
        state,
        city,
        documentNumber,
        socialReason,
        address,
        district,
        number,
        zipCode,
        email,
        phone,
        company,
    }: IRequest) {
        try {
            if (!id)
                return {
                    status: 400,
                    message: 'The Id field is required',
                }
            const contract = await Contract.findOne({ _id: id })

            if (country) contract.country = country
            if (state) contract.state = state
            if (city) contract.city = city
            if (documentNumber) contract.documentNumber = Number(documentNumber)
            if (socialReason) contract.socialReason = socialReason
            if (address) contract.address = address
            if (district) contract.district = district
            if (number) contract.number = Number(number)
            if (zipCode) contract.zipCode = zipCode
            if (email) contract.email = email
            if (phone) contract.phone = Number(phone)
            if (company) contract.company = company

            const response = await Contract.updateOne({ _id: id }, contract)

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

export { UpdateContractUseCase }
