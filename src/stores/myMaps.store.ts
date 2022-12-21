import { defineStore } from 'pinia'
import { ref } from 'vue'
import vlandApi, { CreateMapDto, Map } from '../apis/vland.api'
import { useUserStore } from './user.store'

export const useMyMapsStore = defineStore(
  'myMaps',
  () => {
    const userStore = useUserStore()

    const maps = ref<Map[]>([])
    
    const loadMyMaps = async () => {
        const userId = await userStore.loadUserId()
        if (!userId) return
        maps.value = await vlandApi.users.id.maps.get(userId)
    }

    return {
        maps,
        loadMyMaps
    }
  },
)
