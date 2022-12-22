import axios from "axios"

const baseUrl = `${import.meta.env.VITE_VLAND_API_URL}`

export default {
    maps: {
        post: async (body: CreateMapDto, token: string) => {
            const { data } = await axios.post<Map>(`${baseUrl}/maps`, body, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return data
        },
        id: {
            get: async (id: string) => {
                const { data } = await axios.get<Map>(`${baseUrl}/maps/${id}`)
                return data
            },
            delete: async (id: string, token: string) => {
                const { data } = await axios.delete<Map>(`${baseUrl}/maps/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                return data
            },
            blocks: {
                get: async (id: string) => {
                    const { data } = await axios.get<Block[]>(`${baseUrl}/maps/${id}/blocks`)
                    return data
                }
            }
        }
    },
    blocks: {
        put: async (body: PutBlockDto, token: string) => {
            const { data } = await axios.put<Block>(`${baseUrl}/blocks`, body, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return data
        },
        delete: async (body: DeleteBlockDto, token: string) => {
            const { data } = await axios.delete<Block>(`${baseUrl}/blocks`, {
                data: body,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return data
        }
    },
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
                get: async (id: string) => {
                    const { data } = await axios.get<Map[]>(`${baseUrl}/users/${id}/maps`)
                    return data
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

export enum Blocks {
    Stone = 'Stone',
    Grass = 'Grass',
    Dirt = 'Dirt',
    Wood = 'Wodd',
    Bridge = 'Bridge',
    Snow = 'Snow',
    Sand = 'Sand',
    Water = 'Water'
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

export type Position = {
    x: number
    y: number
    z: number
}

export type Block = {
    _id: string
    type: Blocks
    position: Position
    map: string
}

export type PutBlockDto = {
    type: Blocks
    position: Position
    mapId: string
}

export type DeleteBlockDto = {
    position: Position
    mapId: string
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