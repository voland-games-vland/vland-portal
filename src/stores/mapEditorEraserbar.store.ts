import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMapEditorEraserbarStore = defineStore(
  'mapEditorEraserbar',
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
