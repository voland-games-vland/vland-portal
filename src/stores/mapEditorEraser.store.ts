import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMapEditorEraserStore = defineStore(
  'mapEditorEraser',
  () => {
    const eraser = ref({
        deleteFloor: true,
        deleteBuilding: true
    })

    return {
        eraser
    }
  },
  {
    persist: {
      paths: ['eraser']
    }
  }
)
