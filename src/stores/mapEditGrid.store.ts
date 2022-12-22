import { defineStore } from 'pinia'
import { ref } from 'vue'
import vlandApi, { CreateMapDto } from '../apis/vland.api'

export const useMapEditGridStore = defineStore(
  'mapEditGrid',
  () => {
    const mapId = ref('')
    const isOpeningEditGrid = ref(false)

    const openMapEditGrid = async (mapIdToOpen: string) => {
        isOpeningEditGrid.value = true
        resetMapEditGrid()
        console.log('open Map edit Grid', mapIdToOpen)
        mapId.value = mapIdToOpen
        

        isOpeningEditGrid.value = false
    }

    const resetMapEditGrid = () => {
        console.log('reset map edit grid')
        mapId.value = ''
    }

    return {
        isOpeningEditGrid,
        mapId,
        openMapEditGrid
    }
  },
)
