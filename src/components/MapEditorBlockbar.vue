<template>
    <div class="p-2 bg-slate-800 rounded-lg grid gap-1">
        <div
            v-for="block in mapEditorBlockbarStore.blocks"
            :key="block"
            class="btn btn-xs"
            :class="{
                'btn-active': mapEditorBlockbarStore.selectedBlock == block,
                'btn-outline': mapEditorBlockbarStore.selectedBlock != block
            }"
            @click="mapEditorBlockbarStore.selectedBlock = block"
        >
            {{ block }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useMapEditorBlockbarStore } from '../stores/mapEditorBlockbar.store';

const mapEditorBlockbarStore = useMapEditorBlockbarStore()
</script>