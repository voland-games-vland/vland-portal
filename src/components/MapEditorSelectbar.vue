<template>
    <div v-if="mapEditGridStore.selectedField" class="indicator">
        <div class="indicator-item">
            <button class="btn btn-sm btn-square" @click="mapEditGridStore.selectedField = null">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"
                    height="20" enable-background="new 0 0 32 32" id="Слой_1" version="1.1" viewBox="0 0 32 32"
                    xml:space="preserve">
                    <path
                        d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
                        fill="currentColor" id="Close"></path>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                </svg>
            </button>
        </div>
        <div class="p-2 bg-slate-800 rounded-btn grid gap-1 text-neutral-content">
            <div>
                <div class="font-bold">Field selected:</div>
                <div>{{ mapEditGridStore.selectedField.x }},{{ mapEditGridStore.selectedField.z }}</div>
                <div class="font-bold">Floor Type:</div>
                <div>{{ mapEditGridStore.selectedBlock?.type || 'None' }}</div>
                <div class="font-bold">Building Type:</div>
                <div>{{ mapEditGridStore.selectedBuilding?.metadata.type || 'None' }}</div>
                <div class="text-sm">
                    <div v-if="mapEditGridStore.selectedBuilding?.metadata.type == BUILDING.CapturePoint">
                        <div>- Team: <span>{{ mapEditGridStore.selectedBuilding?.metadata.team || 'None' }}</span></div>
                    </div>
                    <div v-if="mapEditGridStore.selectedBuilding?.metadata.type == BUILDING.Spawn">
                        <div>- Team: <span>{{ mapEditGridStore.selectedBuilding?.metadata.team || 'None' }}</span></div>
                    </div>
                    <div v-if="mapEditGridStore.selectedBuilding?.metadata.type == BUILDING.Teleporter">
                        <div>- Team: <span>{{ mapEditGridStore.selectedBuilding?.metadata.team || 'None' }}</span></div>
                        <div>- Teleport To: <span>{{ mapEditGridStore.selectedBuilding?.metadata.teleportTo.x }}, {{ mapEditGridStore.selectedBuilding?.metadata.teleportTo.z }}</span></div>
                    </div>
                    <div v-if="mapEditGridStore.selectedBuilding?.metadata.type == BUILDING.Spawner">
                        <div>- Spawn Rate: <span>{{ mapEditGridStore.selectedBuilding?.metadata.spawnRate  }}</span></div>
                    </div>
                    <div v-if="mapEditGridStore.selectedBuilding?.metadata.type == BUILDING.Pickup">
                        <div>- Type: <span>{{ mapEditGridStore.selectedBuilding?.metadata.typePickup  }}</span></div>
                        <div>- Amount: <span>{{ mapEditGridStore.selectedBuilding?.metadata.amount  }}</span></div>
                        <div>- Health: <span>{{ mapEditGridStore.selectedBuilding?.metadata.health  }}</span></div>
                        <div>- Team: <span>{{ mapEditGridStore.selectedBuilding?.metadata.team || 'None' }}</span></div>
                        <div>- Respawn Time: <span>{{ mapEditGridStore.selectedBuilding?.metadata.respawnTime || 'None' }}</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { BUILDING } from '../apis/vland.api';
import { useMapEditGridStore } from '../stores/mapEditGrid.store';

const mapEditGridStore = useMapEditGridStore()
</script>