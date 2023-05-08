<template>
    <div class="p-2 bg-slate-800 rounded-btn grid gap-1 text-neutral-content">
        <div class="font-bold text-neutral-content">Eraser</div>
        <div class="grid gap-2">
            <div class="flex align-middle gap-2">
                <input type="checkbox" v-model="mapEditorEraserStore.eraser.deleteFloor" class="checkbox" />
                <div>Floor</div>
            </div>
            <div class="flex align-middle gap-2">
                <input type="checkbox" v-model="mapEditorEraserStore.eraser.deleteBuilding" class="checkbox" />
                <div>Building</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useMapEditorEraserStore } from '../stores/mapEditorEraser.store';

const mapEditorEraserStore = useMapEditorEraserStore()
</script>