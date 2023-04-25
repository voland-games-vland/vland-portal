<template>
    <button class="btn btn-outline btn-error" @click="deleteMap">Delete Map</button>
    <teleport to="body">
        <input type="checkbox" id="my-modal" v-model="isRevealed" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Confirm delete map?</h3>
                <p class="py-4">This can not be undone!</p>
                <div class="flex gap-2">
                    <input type="checkbox" v-model="canClickYesButton" class="checkbox" />
                    <p>Unlock Yes Button</p>
                </div>
                <div class="modal-action">
                    <button class="btn btn-error" :disabled="!canClickYesButton" @click="confirm()">Yes</button>
                    <button class="btn" @click="cancel()">No</button>
                </div>
            </div>
        </div>
    </teleport>
</template>
<script lang="ts" setup>
import { useConfirmDialog } from '@vueuse/core'
import { useMapsStore } from '../stores/maps.store';
import { ref } from 'vue';

const props = defineProps<{
    mapId: string
}>()

const mapsStore = useMapsStore()
const {
    isRevealed,
    reveal,
    confirm,
    cancel,
} = useConfirmDialog()

const canClickYesButton = ref(false)

const deleteMap = async () => {
    const { isCanceled } = await reveal()
    if (isCanceled) return
    await mapsStore.deleteMap(props.mapId)
}
</script>