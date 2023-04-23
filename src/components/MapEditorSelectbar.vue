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
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useMapEditGridStore } from '../stores/mapEditGrid.store';

const mapEditGridStore = useMapEditGridStore()
</script>