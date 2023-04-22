import { defineStore } from 'pinia'
import { ref } from 'vue'
import { BLOCK } from '../apis/vland.api'

export const useMapEditorBlockbarStore = defineStore(
  'mapEditorBlockbar',
  () => {
    const blocks = ref<BLOCK[]>([
        BLOCK.Stone,
        BLOCK.Grass,
        BLOCK.Dirt,
        BLOCK.Wood,
        BLOCK.Bridge,
        BLOCK.Snow,
        BLOCK.Sand,
        BLOCK.Water
    ])
    const selectedBlock = ref<BLOCK>(BLOCK.Stone)

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
