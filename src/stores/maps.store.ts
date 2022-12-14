import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useMapsStore = defineStore(
  'map',
  () => {
    const router = useRouter()

    const createNewMap = async () => {
        router.push('/maps/edit/id-tbd/settings')
    }
    return {
        createNewMap
    }
  },
)
