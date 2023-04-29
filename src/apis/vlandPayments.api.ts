import axios from "axios"

const baseUrl = `${import.meta.env.VITE_VLAND_API_PAYMENTS_URL}`

export default {
    users: {
        me: {
            payments: {
                get: async (token: string) => {
                    const { data } = await axios.get<Payment[]>(`${baseUrl}/users/me/payments`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    return data
                }
            }
        },
    }
}

export type Payment = {
    _id: string
    __v: string
    createdAt: string
    updatedAt: string
    uid: string
    price: number
    currency: string
    method: string
}