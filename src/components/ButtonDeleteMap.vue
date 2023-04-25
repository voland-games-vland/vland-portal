<template>
    <label for="modal-delete-map" class="btn btn-outline btn-error">Delete Map</label>
    <teleport to="body">
        <input type="checkbox" id="modal-delete-map" class="modal-toggle" />
        <label for="modal-delete-map" class="modal cursor-pointer">
            <label class="modal-box realtive" for="">
                <h3 class="font-bold text-lg">Confirm delete map?</h3>
                <p class="py-4">This can not be undone!</p>
                <div class="flex gap-2">
                    <input type="checkbox" v-model="canClickYesButton" class="checkbox" />
                    <p>Unlock Yes Button</p>
                </div>
                <div class="modal-action">
                    <button class="btn btn-error" :disabled="!canClickYesButton" @click="deleteMap()">Yes</button>
                    <label for="modal-delete-map" class="btn">No</label>
                </div>
            </label>
        </label>
    </teleport>
</template>
<script lang="ts" setup>
import { useMapsStore } from '../stores/maps.store';
import { ref } from 'vue';

const props = defineProps<{
    mapId: string
}>()

const mapsStore = useMapsStore()

const canClickYesButton = ref(false)

const deleteMap = async () => {
    await mapsStore.deleteMap(props.mapId)
}
</script>