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
            patch: async (id: string, body: MapUpdateDto, token: string) => {
                const { data } = await axios.patch<Map>(`${baseUrl}/maps/${id}`, body, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
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
            },
            buildings: {
                get: async (id: string) => {
                    const { data } = await axios.get<Building[]>(`${baseUrl}/maps/${id}/buildings`)
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
            },
            money: {
                get: async (token: string) => {
                    const { data } = await axios.get<Money>(`${baseUrl}/users/me/money`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    return data
                }
            },
            nickname: {
                put: async (body: UserNicknamePutDto, token: string) => {
                    const { data } = await axios.put<User>(`${baseUrl}/users/me/nickname`, body, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    return data
                }
            }
        },
        id: {
            maps: {
                get: async (id: string) => {
                    const { data } = await axios.get<Map[]>(`${baseUrl}/users/${id}/maps`)
                    return data
                }
            },
            characters: {
                get: async (id: string) => {
                    const { data } = await axios.get<Character[]>(`${baseUrl}/users/${id}/characters`)
                    return data
                }
            }
        }
    },
    characters: {
        post: async (body: CharacterCreateDto, token: string) => {
            const { data } = await axios.post<Character>(`${baseUrl}/characters`, body, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return data
        },
        id: {
            get: async (id: string) => {
                const { data } = await axios.get<Character>(`${baseUrl}/characters/${id}`)
                return data
            },
            patch: async (id: string, body: CharacterPatchDto, token: string) => {
                const { data } = await axios.patch<Character>(`${baseUrl}/characters/${id}`, body, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                return data
            },
            delete: async (id: string, token: string) => {
                const { data } = await axios.delete<Character>(`${baseUrl}/characters/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                return data
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
    Spawner = 'Spawner',
    Pickup = 'Pickup'
}

export enum Weapon {
    Sword = 'Sword',
    Daggers = 'Daggers',
    Hammer = 'Hammer',
    Spear = 'Spear',
    Bow = 'Bow',
    Pistols = 'Pistols',
    Sniper = 'Sniper'
}

export type MapCreateDto = {
    name: string
    size: SIZE
}

export type MapUpdateDto = {
    name?: string
    settings?: Partial<MapSettings>
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
    position: Position
    map: string
    metadata: BuildingMetadata
}

export type BuildingMetadata = BuildingMetadataSpawner | BuildingMetadataSpawn | BuildingMetadataTeleporter | BuildingMetadataCaputerPoint

export type BuildingMetadataSpawner = {
    type: BUILDING.Spawner,
    spawnRate: number
}

export type BuildingMetadataSpawn = {
    type: BUILDING.Spawn,
    team?: number
}

export type BuildingMetadataTeleporter = {
    type: BUILDING.Teleporter,
    team?: number
    teleportTo: Position
}

export type BuildingMetadataCaputerPoint = {
    type: BUILDING.CapturePoint,
    team?: number
}

export enum Pickup {
    Health = 'Health',
    Armor = 'Armor',
    Energy = 'Energy',
}

export type BuildingMetadataPickup = {
    type: BUILDING.Pickup,
    typePickup: Pickup,
    amount: number,
    health: number,
    team?: number,
    respawnTime?: number
}

export type BuildingPutDto = {
    position: Position
    map: string
    metadata: BuildingMetadata
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

export type UserNicknamePutDto = {
    nickname: string
}

export type Money = {
    _id: string
    __v: string
    createdAt: string
    updatedAt: string
    uid: string
    money: number
}

export type Character = {
    _id: string
    __v: string
    createdAt: string
    updatedAt: string
    userId: string
    name: string
    weaponType: Weapon
    attributes: CharacterAttributes
}

export type CharacterAttributes = {
    maxHealth: number
    maxShield: number
    attackDamage: number
    moveSpeed: number
}

export type CharacterCreateDto = {
    name: string
}

export type CharacterPatchDto = {
    name?: string
    weaponType?: Weapon
    attributes?: CharacterAttributes
}