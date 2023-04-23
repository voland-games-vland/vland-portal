<template>
    <div
        class="grid gap-px bg-black border border-black"
        :style="getGridStyle"
        @mousedown.left="isLeftMouseButtonPressed = true"
        @mouseup.left="isLeftMouseButtonPressed = false"
        @mouseleave="isLeftMouseButtonPressed = false"
    >
        <div v-for="index in mapEditGridStore.gridItemsCount" :key="index" :style="getGridItemStyles(index)"
            class="bg-base-200 hover:opacity-75 overflow-hidden relative"
            :class="[
                'grid-item',
                getGridItemTypeClass(index),
                {
                    'border-2 border-secondary-focus': mapEditorToolbar.selectedTool == Tools.Select && isGridItemSelected(index)
                }
            ]"
            @click="mapEditGridStore.paintToIndex(index)"
            @mousemove="isLeftMouseButtonPressed && mapEditGridStore.paintToIndex(index)"
        >
            <div v-if="mapEditGridStore.showCoordinates" class="font-thin absolute bottom-0 right-0 select-none text-[9px] text-gray-600">{{
                    mapEditGridStore.getAxisFromIndex(index).x
            }},{{ mapEditGridStore.getAxisFromIndex(index).z }}</div>
        </div>
        <!--
            <div v-for="(block, index) in mapEditGridStore.blocks" :key="index" :style="{
                gridColumn: block.position.z,
                gridRow: block.position.x,
            }"></div>
        -->
        <div v-for="(building, index) in mapEditGridStore.buildings" :key="index" :style="{
            gridColumn: building.position.z,
            gridRow: building.position.x
        }" class="text-black z-50 grid justify-center font-bold pointer-events-none building" :class="building.type.toLocaleLowerCase()"></div>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useMapEditGridStore } from '../stores/mapEditGrid.store';
import { Tools, useMapEditorToolbarStore } from '../stores/mapEditorToolbar.store';

const mapEditGridStore = useMapEditGridStore()
const mapEditorToolbar = useMapEditorToolbarStore()

const isLeftMouseButtonPressed = ref(false);

const width = computed(() => mapEditGridStore.gridWidth)
const height = computed(() => mapEditGridStore.gridHeigth)
const gridItemSize = computed(() => mapEditGridStore.gridItemSize)

const getGridStyle = computed(() => {
    return {
        gridTemplateColumns: `repeat(${width.value}, ${gridItemSize.value}px)`,
        gridTemplateRows: `repeat(${height.value}, ${gridItemSize.value}px)`,
    };
});

const getGridItemStyles = (index: number) => {
    const axis = mapEditGridStore.getAxisFromIndex(index);
    return {
        gridColumn: axis.z,
        gridRow: axis.x,
    };
};

const getGridItemTypeClass = (index: number) => {
    const axis = mapEditGridStore.getAxisFromIndex(index);
    const key = `${axis.x}_0_${axis.z}`;
    const block = mapEditGridStore.blocks[key]
    return !!block
        ? block.type.toLocaleLowerCase()
        : ''
};

const isGridItemSelected = (index: number) => {
    const axis = mapEditGridStore.getAxisFromIndex(index);
    return (mapEditGridStore.selectedField?.x == axis.x) && (mapEditGridStore.selectedField.z == axis.z)
}
</script>
<style scoped>
.grid-item.stone {
    @apply bg-gray-500;
}
.grid-item.grass {
    @apply bg-green-500;
}
.grid-item.dirt {
    @apply bg-amber-900;
}
.grid-item.wood {
    @apply bg-amber-700;
}
.grid-item.bridge {
    @apply bg-orange-300;
}
.grid-item.snow {
    @apply bg-yellow-50;
}
.grid-item.sand {
    @apply bg-yellow-200;
}
.grid-item.water {
    @apply bg-blue-500;
}

.building.spawn::before {
    content: "S";
}
.building.capturepoint::before {
    content: "CP";
}
.building.teleporter::before {
    content: "TP";
}
.building.spawner::before {
    content: "SR";
}
</style>