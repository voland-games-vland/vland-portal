<template>
    <div class="p-2 bg-slate-800 rounded-lg grid gap-1">
        <div class="font-bold text-neutral-content">Building</div>
        <div
            v-for="building in mapEditorBuildingbarStore.buildings"
            :key="building"
            class="btn btn-xs"
            :class="{
                'btn-active': mapEditorBuildingbarStore.selectedBuilding == building,
                'btn-outline': mapEditorBuildingbarStore.selectedBuilding != building
            }"
            @click="mapEditorBuildingbarStore.selectedBuilding = building"
        >
            {{ building }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useMapEditorBuildingbarStore } from '../stores/mapEditorBuildingbar.store';

const mapEditorBuildingbarStore = useMapEditorBuildingbarStore()
</script>