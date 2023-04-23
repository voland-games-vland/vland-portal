import { getAuth } from 'firebase/auth'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import vlandApi, { Block, BLOCK, BlockDeleteDto, Map, BlockPutDto, Building, Position } from '../apis/vland.api'
import { useMapEditorBlockbarStore } from './mapEditorBlockbar.store'
import { Tools, useMapEditorToolbarStore } from './mapEditorToolbar.store'
import { useMapEditorBuildingbarStore } from './mapEditorBuildingbar.store'

export const useMapEditGridStore = defineStore(
  'mapEditGrid',
  () => {
    const auth = getAuth()
    const mapEditorToolbarStore = useMapEditorToolbarStore()
    const mapEditorBlockbar = useMapEditorBlockbarStore()
    const mapEditorBuildingbar = useMapEditorBuildingbarStore()

    const mapId = ref('')
    const isOpeningEditGrid = ref(false)

    const map = ref<Map>()
    const gridWidth = computed(() => map.value?.width || 0)
    const gridHeigth = computed(() => map.value?.height || 0)
    const zoomLevel = ref(100)
    const gridItemSize = computed(() => 30 * (zoomLevel.value / 100))
    const showCoordinates = ref(false)
    const gridItemsCount = computed(() => gridWidth.value * gridHeigth.value)
    const selectedField = ref<{x: number, z: number} | null>(null)
    const selectedBlock = computed(() => {
        if (!selectedField) return undefined
        return blocks.value[`${selectedField.value?.x}_0_${selectedField.value?.z}`]
    })


    const blocks = ref<{
        [key: string]: Block
    }>({})

    const buildings = ref<{
        [key: string]: Building
    }>({})

    const openMapEditGrid = async (mapIdToOpen: string) => {
        isOpeningEditGrid.value = true
        resetMapEditGrid()
        console.log('open Map edit Grid', mapIdToOpen)
        mapId.value = mapIdToOpen

        map.value = await vlandApi.maps.id.get(mapId.value)

        await loadBlocks()
        await loadBuildings()

        isOpeningEditGrid.value = false
    }

    const getKeyFromPosition = (position: Position) => {
        return `${position.x}_${position.y}_${position.z}`
    }

    const loadBlocks = async () => {
        if (!mapId.value) return
        const blocksData = await vlandApi.maps.id.blocks.get(mapId.value)

        for (let block of blocksData) {
            blocks.value[getKeyFromPosition(block.position)] = block
        }
    }

    const loadBuildings = async () => {
        if (!mapId.value) return
        const buildingsData = await vlandApi.maps.id.buildings.get(mapId.value)

        for (let building of buildingsData) {
            buildings.value[getKeyFromPosition(building.position)] = building
        }
    }

    const resetMapEditGrid = () => {
        console.log('reset map edit grid')
        mapId.value = ''
        map.value = undefined
        blocks.value = {}
        buildings.value = {}
        selectedField.value = null
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

    const paintToIndex = async (index: number) => {
        console.log('grid item click', index)
        console.log('cords', getAxisFromIndex(index))
        const axis = getAxisFromIndex(index)
        
        switch(mapEditorToolbarStore.selectedTool) {
            case Tools.Select: {
                console.log(Tools.Select)
                selectedField.value = axis
                break;
            }
            case Tools.Block: {
                console.log(Tools.Block)
                const keyBlocksStore = `${axis.x}_0_${axis.z}`
                const currentBlock = blocks.value[keyBlocksStore]
                if (!!currentBlock && (currentBlock.type == mapEditorBlockbar.selectedBlock)) return
                const blockPutDto: BlockPutDto = {
                    type: mapEditorBlockbar.selectedBlock,
                    position: {
                        x: axis.x,
                        y: 0,
                        z: axis.z
                    },
                    map: mapId.value
                }

                blocks.value[keyBlocksStore] = {
                    ...blockPutDto,
                    _id: ''
                }
                
                const token = await auth.currentUser?.getIdToken()
                if(!token) return
                const result = await vlandApi.blocks.put(blockPutDto, token)
                blocks.value[keyBlocksStore]._id = result._id
                break;
            }
            case Tools.Object: {
                console.log(Tools.Object)
                break;
            }
            case Tools.Eraser: {
                console.log(Tools.Eraser)
                const keyBlocksStore = `${axis.x}_0_${axis.z}`
                const hasAlreadyBlockOnPaintIndex = !!blocks.value[keyBlocksStore]
                console.log(hasAlreadyBlockOnPaintIndex)
                if (hasAlreadyBlockOnPaintIndex) {
                    delete blocks.value[keyBlocksStore]
                    const blockDeleteDto: BlockDeleteDto = {
                        position: {
                            x: axis.x,
                            y: 0,
                            z: axis.z
                        },
                        map: mapId.value
                    }
                    const token = await auth.currentUser?.getIdToken()
                    if(!token) return
                    await vlandApi.blocks.delete(blockDeleteDto, token)
                }
                break;
            }
        }
    }

    const zoomOut = () => {
        const newZoomLevel = zoomLevel.value - 10
        if (newZoomLevel < 10) return
        zoomLevel.value = newZoomLevel
    }

    const zoomIn = () => {
        zoomLevel.value = zoomLevel.value + 10
    }

    const zoomReset = () => {
        zoomLevel.value = 100
    }

    return {
        isOpeningEditGrid,
        resetMapEditGrid,
        mapId,
        openMapEditGrid,
        blocks,
        buildings,
        map,
        gridItemsCount,
        gridItemSize,
        getAxisFromIndex,
        gridWidth,
        gridHeigth,
        showCoordinates,
        paintToIndex,
        zoomLevel,
        zoomIn,
        zoomOut,
        zoomReset,
        selectedField,
        selectedBlock
    }
  },
  {
    persist: {
      paths: ['showCoordinates', 'zoomLevel']
    }
  }
)
