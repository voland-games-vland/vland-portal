<template>
    <div class="btn-group">
        <button class="btn btn-sm btn-square" @click="mapEditGridStore.zoomOut">-</button>
        <button class="btn btn-sm" @click="mapEditGridStore.zoomReset">
            <div>{{ mapEditGridStore.zoomLevel }}%</div>
        </button>
        <button class="btn btn-sm btn-square" @click="mapEditGridStore.zoomIn">+</button>
    </div>
</template>
<script lang="ts" setup>
import { useMapEditGridStore } from '../stores/mapEditGrid.store';

const mapEditGridStore = useMapEditGridStore()
</script>