import { getAuth } from "firebase/auth";
import { defineStore } from "pinia";
import vlandApi, { Character } from "../apis/vland.api";
import { useUserStore } from "./user.store";
import { ref } from "vue";

export const useCharactersMyStore = defineStore(
    'charactersMy',
    () => {
        const auth = getAuth()
        const userStore = useUserStore()

        const characters = ref<Character[]>([])

        const loadMyCharacters = async () => {
            const userId = await userStore.loadUserId()
            if (!userId) return

            const token = await auth.currentUser?.getIdToken()
            if (!token) return

            characters.value = await vlandApi.users.id.characters.get(userId)
        }

        auth.onAuthStateChanged(async (authUser) => {
            if (!authUser) {
                characters.value = []
            }
        })


        return {
            characters,
            loadMyCharacters
        }
    }
)