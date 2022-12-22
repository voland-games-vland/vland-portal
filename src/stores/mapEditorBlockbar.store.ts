import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Blocks } from '../apis/vland.api'

export const useMapEditorBlockbarStore = defineStore(
  'mapEditorBlockbar',
  () => {
    const blocks = ref<Blocks[]>([
        Blocks.Stone,
        Blocks.Grass,
        Blocks.Dirt,
        Blocks.Wood,
        Blocks.Bridge,
        Blocks.Snow,
        Blocks.Sand,
        Blocks.Water
    ])
    const selectedBlock = ref<Blocks>(Blocks.Stone)

    return {
        blocks,
        selectedBlock
    }
  },
  {
    persist: {
      paths: ['selectedBlock']
    }
  }
)
