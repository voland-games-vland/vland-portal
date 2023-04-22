import axios from "axios"

const baseUrl = `${import.meta.env.VITE_VLAND_API_URL}`

export default {
    maps: {
        post: async (body: MapCreateDto, token: string) => {
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
        put: async (body: BlockPutDto, token: string) => {
            const { data } = await axios.put<Block>(`${baseUrl}/blocks`, body, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return data
        },
        delete: async (body: BlockDeleteDto, token: string) => {
            const { data } = await axios.delete<Block>(`${baseUrl}/blocks`, {
                data: body,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return data
        }
    },
    buildings: {
        put: async (body: BuildingPutDto, token: string) => {
            const { data } = await axios.put<Building>(`${baseUrl}/buildings`, body, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return data
        },
        delete: async (body: BuildingDeleteDto, token: string) => {
            const { data } = await axios.delete<Building>(`${baseUrl}/buildings`, {
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

export enum SIZE {
    XS = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL'
}

export enum BLOCK {
    Stone = 'Stone',
    Grass = 'Grass',
    Dirt = 'Dirt',
    Wood = 'Wood',
    Bridge = 'Bridge',
    Snow = 'Snow',
    Sand = 'Sand',
    Water = 'Water'
}

export enum BUILDING {
    Spawn = 'Spawn',
    CapturePoint = 'CapturePoint',
    Teleporter = 'Teleporter',
    Spawner = 'Spawner'
}

export type MapCreateDto = {
    name: string
    size: SIZE
}

export type Map = {
    _id: string
    __v: string
    createdAt: string
    updatedAt: string
    name: string
    owner?: string
    settings: MapSettings
    width: number
    height: number
}

export type MapSettings = {
    teams: number
    scoreToWin: number
    timeLimitInSeconds: number
}

export type Position = {
    x: number
    y: number
    z: number
}

export type Block = {
    _id: string
    type: BLOCK
    position: Position
    map: string
}

export type BlockPutDto = {
    type: BLOCK
    position: Position
    map: string
}

export type BlockDeleteDto = {
    position: Position
    map: string
}

export type Building = {
    _id: string
    type: BUILDING
    position: Position
    map: string
}

export type BuildingPutDto = {
    type: BUILDING
    position: Position
    map: string
}

export type BuildingDeleteDto = {
    position: Position
    map: string
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
    xp: number
    level: number
}