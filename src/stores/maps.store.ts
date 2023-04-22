import { getAuth } from 'firebase/auth'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import vlandApi, { MapCreateDto } from '../apis/vland.api'

export const useMapsStore = defineStore(
  'maps',
  () => {
    const auth = getAuth()
    const router = useRouter()

    const createNewMap = async (mapCreateDto: MapCreateDto) => {
      const token = await auth.currentUser?.getIdToken()
      if(!token) return
      const data = await vlandApi.maps.post(mapCreateDto, token)
      router.push(`/maps/edit/${data._id}/grid`)
    }
    
    const deleteMap = async (id: string) => {
      const token = await auth.currentUser?.getIdToken()
      if(!token) return
      await vlandApi.maps.id.delete(id, token)
      router.push(`/maps`)
    }

    return {
        createNewMap,
        deleteMap
    }
  },
)
