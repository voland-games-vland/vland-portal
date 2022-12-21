<template>
    <button class="btn btn-outline btn-error" @click="deleteMap">Delete Map</button>
    <teleport to="body">
        <input type="checkbox" id="my-modal" v-model="isRevealed" class="modal-toggle" />
        <div class="modal" @click="cancel()">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Confirm delete map?</h3>
                <p class="py-4">This can not be undone!</p>
                <div class="modal-action">
                    <button class="btn btn-ghost" @click="confirm()">Yes</button>
                    <button class="btn" @click="cancel()">No</button>
                </div>
            </div>
        </div>
    </teleport>
</template>
<script lang="ts" setup>
import { useConfirmDialog } from '@vueuse/core'
import { useMapsStore } from '../stores/maps.store';

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

const deleteMap = async () => {
    const { isCanceled } = await reveal()
    if (isCanceled) return
    await mapsStore.deleteMap(props.mapId)
}
</script>