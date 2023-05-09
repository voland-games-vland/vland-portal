import { getAuth } from 'firebase/auth'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import vlandApi, { Map } from '../apis/vland.api'
import { useUserStore } from './user.store'

export const useMyMapsStore = defineStore(
  'myMaps',
  () => {
    const auth = getAuth()
    const userStore = useUserStore()

    const maps = ref<Map[] | null>(null)
    
    const loadMyMaps = async () => {
        const userId = await userStore.loadUserId()
        if (!userId) return
        maps.value = await vlandApi.users.id.maps.get(userId)
    }

    auth.onAuthStateChanged(async (authUser) => {
        if(!authUser) {
            maps.value = []
        }
      })

    return {
        maps,
        loadMyMaps
    }
  },
)
