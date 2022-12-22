import { defineStore } from 'pinia'
import { ref } from 'vue'
import vlandApi, { Map } from '../apis/vland.api'

export const useMapEditGridStore = defineStore(
  'mapEditGrid',
  () => {
    const mapId = ref('')
    const isOpeningEditGrid = ref(false)

    const map = ref<Map>()

    const blocks = ref()

    const openMapEditGrid = async (mapIdToOpen: string) => {
        isOpeningEditGrid.value = true
        resetMapEditGrid()
        console.log('open Map edit Grid', mapIdToOpen)
        mapId.value = mapIdToOpen

        map.value = await vlandApi.maps.id.get(mapId.value)

        isOpeningEditGrid.value = false
    }

    const resetMapEditGrid = () => {
        console.log('reset map edit grid')
        mapId.value = ''
        map.value = undefined
    }

    return {
        isOpeningEditGrid,
        resetMapEditGrid,
        mapId,
        openMapEditGrid,
        blocks,
        map
    }
  },
)
