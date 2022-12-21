import axios from "axios"

const baseUrl = `${import.meta.env.VITE_VLAND_API_URL}`

export default {
    users: {
        me: {
            get: async (token: string) => {
                const { data } = await axios.get<User>(`${baseUrl}/users/me`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                return data
            }
        },
        id: {
            maps: {
                get: (id: string) => {

                }
            }
        }
    }
}

export enum Size {
    XS = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL'
}

export type CreateMapDto = {
    name: string
    size: Size
}

export type Map = {
    _id: string
    __v: string
    createdAt: string
    updatedAt: string
    name: string
    owner?: string
    settings: {
        teams: number
        scoreToWin: number
        timeLimitInSeconds: number
    }
    width: number
    height: number
}

export type User = {
    _id: string
    __v: string
    createdAt: string
    updatedAt: string
    uid: string
    coins: number
    banknotes: number
    nickname: string
}