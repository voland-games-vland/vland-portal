import { getAuth } from 'firebase/auth'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import vlandApi, { Block, BLOCK, BlockDeleteDto, Map, BlockPutDto, Building, Position, BuildingPutDto, BuildingDeleteDto, BUILDING, BuildingMetadataSpawn, BuildingMetadataCaputerPoint, BuildingMetadataSpawner, BuildingMetadataTeleporter } from '../apis/vland.api'
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
    const loadingMessage = ref('')

    const map = ref<Map>()
    const gridWidth = computed(() => map.value?.width || 0)
    const gridHeigth = computed(() => map.value?.height || 0)
    const zoomLevel = ref(100)
    const gridItemSize = computed(() => 30 * (zoomLevel.value / 100))
    const showCoordinates = ref(false)
    const gridItemsCount = computed(() => gridWidth.value * gridHeigth.value)
    const selectedField = ref<{x: number, z: number} | null>(null)
    const selectedBlock = computed(() => {
        if (!selectedField.value) return undefined
        return blocks.value[getKeyFromPosition({
            x: selectedField.value?.x,
            y: 0,
            z: selectedField.value?.z
        })]
    })
    const selectedBuilding = computed(() => {
        if (!selectedField.value) return undefined
        return buildings.value[getKeyFromPosition({
            x: selectedField.value?.x,
            y: 0,
            z: selectedField.value?.z
        })]
    })


    const blocks = ref<{
        [key: string]: Block
    }>({})

    const buildings = ref<{
        [key: string]: Building
    }>({})

    const openMapEditGrid = async (mapIdToOpen: string) => {
        isOpeningEditGrid.value = true
        loadingMessage.value = ''
        resetMapEditGrid()
        console.log('open Map edit Grid', mapIdToOpen)
        mapId.value = mapIdToOpen

        loadingMessage.value = 'Metadata'
        map.value = await vlandApi.maps.id.get(mapId.value)
        loadingMessage.value = 'Blocks'
        await loadBlocks()
        loadingMessage.value = 'Buildings'
        await loadBuildings()

        isOpeningEditGrid.value = false
        loadingMessage.value = ''
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
        mapEditorToolbarStore.selectedTool = Tools.Select
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
                const position: Position = {
                    x: axis.x,
                    y: 0,
                    z: axis.z
                }
                const keyBlocksStore = getKeyFromPosition(position)
                const currentBlock = blocks.value[keyBlocksStore]
                if (!!currentBlock && (currentBlock.type == mapEditorBlockbar.selectedBlock)) return
                const blockPutDto: BlockPutDto = {
                    type: mapEditorBlockbar.selectedBlock,
                    position: position,
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
                const position: Position = {
                    x: axis.x,
                    y: 0,
                    z: axis.z
                }
                const keyBuildingsStore = getKeyFromPosition(position)
                const currentBuilding = buildings.value[keyBuildingsStore]
                if (!!currentBuilding && (currentBuilding.metadata.type == mapEditorBuildingbar.selectedBuilding)) return
                const getBuildingMetadata = (building: BUILDING) => {
                    switch (building) {
                        case BUILDING.Spawn:
                            const buildingMetadataSpawn: BuildingMetadataSpawn = {
                                type: BUILDING.Spawn
                            }
                            return buildingMetadataSpawn
                        case BUILDING.CapturePoint:
                            const buildingMetadataCapturePoint: BuildingMetadataCaputerPoint = {
                                type: BUILDING.CapturePoint
                            }
                            return buildingMetadataCapturePoint
                        
                        case BUILDING.Spawner:
                            const buildingMetadataSpawner: BuildingMetadataSpawner = {
                                type: BUILDING.Spawner,
                                spawnRate: 10
                            }
                            return buildingMetadataSpawner
                        case BUILDING.Teleporter:
                            const buildingMetadataTeleporter: BuildingMetadataTeleporter = {
                                type: BUILDING.Teleporter,
                                teleportTo: {
                                    x: 1,
                                    y: 0,
                                    z: 1
                                }
                            }
                            return buildingMetadataTeleporter
                    }
                }
                const buildingPutDto: BuildingPutDto = {
                    position: position,
                    map: mapId.value,
                    metadata: getBuildingMetadata(mapEditorBuildingbar.selectedBuilding)
                }

                buildings.value[keyBuildingsStore] = {
                    ...buildingPutDto,
                    _id: ''
                }

                const token = await auth.currentUser?.getIdToken()
                if(!token) return
                const result = await vlandApi.buildings.put(buildingPutDto, token)
                buildings.value[keyBuildingsStore]._id = result._id
                break;
            }
            case Tools.Eraser: {
                console.log(Tools.Eraser)
                const position: Position = {
                    x: axis.x,
                    y: 0,
                    z: axis.z
                }
                await Promise.all([eraseBlock(position), eraseBuilding(position)])
                break;
            }
        }
    }

    const eraseBlock = async (position: Position) => {
        const keyBlocksStore = getKeyFromPosition(position)
        const hasAlreadyBlockOnPaintIndex = !!blocks.value[keyBlocksStore]
        if (!hasAlreadyBlockOnPaintIndex) return

        delete blocks.value[keyBlocksStore]
        const blockDeleteDto: BlockDeleteDto = {
            position: position,
            map: mapId.value
        }
        const token = await auth.currentUser?.getIdToken()
        if(!token) return
        await vlandApi.blocks.delete(blockDeleteDto, token)
    }

    const eraseBuilding = async (position: Position) => {
        const keyBuildingsStore = getKeyFromPosition(position)
        const hasAlreadyBuildingOnPaintIndex = !!buildings.value[keyBuildingsStore]
        if (!hasAlreadyBuildingOnPaintIndex) return

        delete buildings.value[keyBuildingsStore]
        const buildingDeleteDto: BuildingDeleteDto = {
            position: position,
            map: mapId.value
        }
        const token = await auth.currentUser?.getIdToken()
        if(!token) return
        await vlandApi.buildings.delete(buildingDeleteDto, token)
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
        loadingMessage,
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
        selectedBlock,
        selectedBuilding
    }
  },
  {
    persist: {
      paths: ['showCoordinates', 'zoomLevel']
    }
  }
)
