import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import vlandApi, { Block, Map } from '../apis/vland.api'

export const useMapEditGridStore = defineStore(
  'mapEditGrid',
  () => {
    const mapId = ref('')
    const isOpeningEditGrid = ref(false)

    const map = ref<Map>()
    const gridWidth = computed(() => map.value?.width || 0)
    const gridHeigth = computed(() => map.value?.height || 0)
    const gridItemSize = ref(30)
    const showCoordinates = ref(false)
    const gridItemsCount = computed(() => gridWidth.value * gridHeigth.value)


    const blocks = ref<{
        [key: string]: Block
    }>({})

    const openMapEditGrid = async (mapIdToOpen: string) => {
        isOpeningEditGrid.value = true
        resetMapEditGrid()
        console.log('open Map edit Grid', mapIdToOpen)
        mapId.value = mapIdToOpen

        map.value = await vlandApi.maps.id.get(mapId.value)

        await loadBlocks()

        isOpeningEditGrid.value = false
    }

    const loadBlocks = async () => {
        if(!mapId.value) return
        const blocksData = await vlandApi.maps.id.blocks.get(mapId.value)

        for(let block of blocksData) {
            blocks.value[`${block.position.x}_${block.position.y}_${block.position.z}`] = block
        }
    }

    const resetMapEditGrid = () => {
        console.log('reset map edit grid')
        mapId.value = ''
        map.value = undefined
        blocks.value = {}
    }

    const getAxisFromIndex = (index: number) => {
        const width = gridWidth.value
        const x = Math.ceil(index / width);
        const z = ((index - 1) % width) + 1;
        const axis = {
            x,
            z
        }
        return axis
    }

    return {
        isOpeningEditGrid,
        resetMapEditGrid,
        mapId,
        openMapEditGrid,
        blocks,
        map,
        gridItemsCount,
        gridItemSize,
        getAxisFromIndex,
        gridWidth,
        gridHeigth,
        showCoordinates
    }
  },
)
