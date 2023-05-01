import { getAuth } from "firebase/auth";
import { defineStore } from "pinia";
import vlandApi, { CharacterCreateDto } from "../apis/vland.api";

export const useCharactersStore = defineStore(
    'characters',
    () => {
        const auth = getAuth()

        const createNewCharacter = async (characterCreateDto: CharacterCreateDto) => {
            const token = await auth.currentUser?.getIdToken()
            if(!token) return
            const data = await vlandApi.characters.post(characterCreateDto, token)
            return data
        }

        const deleteCharacter = async (id: string) => {
            const token = await auth.currentUser?.getIdToken()
            if(!token) return
            const data = await vlandApi.characters.id.delete(id, token)
            return data
        }

        return {
            createNewCharacter,
            deleteCharacter
        }
    }
)