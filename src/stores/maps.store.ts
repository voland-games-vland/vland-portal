import { getAuth } from 'firebase/auth'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import vlandApi, { CreateMapDto } from '../apis/vland.api'

export const useMapsStore = defineStore(
  'maps',
  () => {
    const auth = getAuth()
    const router = useRouter()

    const createNewMap = async (body: CreateMapDto) => {
      const token = await auth.currentUser?.getIdToken()
      if(!token) return
      const data = await vlandApi.maps.post(body, token)
      router.push(`/maps/edit/${data._id}/settings`)
    }
    return {
        createNewMap
    }
  },
)
