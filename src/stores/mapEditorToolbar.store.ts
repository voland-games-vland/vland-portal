import { defineStore } from 'pinia'
import { ref } from 'vue'

export enum Tools {
    Select = 'Select',
    Block = 'Block',
    Object = 'Object',
    Eraser = 'Eraser'
}

export const useMapEditorToolbarStore = defineStore(
  'mapEditorToolbar',
  () => {
    const selectedTool = ref<Tools>(Tools.Select)

    return {
        selectedTool
    }
  }
)
