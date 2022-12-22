<template>
    <div
        class="grid gap-px bg-black border border-black"
        :style="gridStyle"
    >
        <div v-for="index in mapEditGridStore.gridItemsCount" :key="index" class="bg-slate-300 hover:bg-slate-400 overflow-hidden relative">
            <div class="font-thin absolute bottom-0 right-0 select-none text-[9px] text-gray-600">{{ mapEditGridStore.getAxisFromIndex(index).x }},{{ mapEditGridStore.getAxisFromIndex(index).z }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useMapEditGridStore } from '../stores/mapEditGrid.store';
const mapEditGridStore = useMapEditGridStore()

const width = computed(() => mapEditGridStore.gridWidth)
const height = computed(() => mapEditGridStore.gridHeigth)
const gridItemSize = computed(() => mapEditGridStore.gridItemSize)

const gridStyle = computed(() => {
    return {
        gridTemplateColumns: `repeat(${width.value}, ${gridItemSize.value}px)`,
        gridTemplateRows: `repeat(${height.value}, ${gridItemSize.value}px)`,
    };
});
</script>