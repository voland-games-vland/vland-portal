<template>
    <div class="p-2 bg-slate-800 rounded-lg grid gap-1 text-neutral-content">
        <div v-if="!mapEditGridStore.selectedField" class="font-bold">Nothing selected</div>
        <div v-if="mapEditGridStore.selectedField">
            <div class="font-bold">Field selected:</div>
            <div>{{ mapEditGridStore.selectedField.x }},{{ mapEditGridStore.selectedField.z }}</div>
            <div class="font-bold">Floor Type:</div>
            <div>{{ mapEditGridStore.selectedBlock?.type || 'None' }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useMapEditGridStore } from '../stores/mapEditGrid.store';

const mapEditGridStore = useMapEditGridStore()
</script>