import { defineStore } from 'pinia'
import { ref } from 'vue'
import { BUILDING } from '../apis/vland.api'

export const useMapEditorBuildingbarStore = defineStore(
  'mapEditorBuildingbar',
  () => {
    const buildings = ref<BUILDING[]>([
        BUILDING.Spawn,
        BUILDING.CapturePoint,
        BUILDING.Teleporter,
        BUILDING.Spawner,
        BUILDING.Pickup
    ])
    const selectedBuilding = ref<BUILDING>(BUILDING.Spawn)

    return {
        buildings,
        selectedBuilding
    }
  },
  {
    persist: {
      paths: ['selectedBuilding']
    }
  }
)
