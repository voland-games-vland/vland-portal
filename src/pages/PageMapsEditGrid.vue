<template>
    <div class="h-screen max-h-[calc(100vh_-_64px)] lg:max-h-screen relative bg-slate-300 overflow-hidden" v-if="!showLoadingScreen">
        <div class="absolute top-4 left-4 right-4 inline-grid grid-cols-[1fr_2fr_1fr] z-10">
            <div class="flex items-center gap-1">
                <div>
                    <RouterLink :to="`/maps`" @click="mapEditGridStore.resetMapEditGrid"
                        class="btn btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"
                            height="20" enable-background="new 0 0 32 32" id="Слой_1" version="1.1" viewBox="0 0 32 32"
                            xml:space="preserve">
                            <path
                                d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
                                fill="currentColor" id="Close" />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                        </svg>
                    </RouterLink>
                </div>
                <div class="text-center font-bold">
                    <span v-if="mapEditGridStore.isOpeningEditGrid">Loading...</span>
                    <span v-if="!mapEditGridStore.isOpeningEditGrid">{{ mapEditGridStore.map?.name}}</span>
                </div>
            </div>
            <div class="grid justify-center">
                <GridToolbar />
            </div>
            <div class="flex flex-row-reverse items-center gap-1">
                <ButtonGridEditSettings />
                <div v-if="!mapEditGridStore.isOpeningEditGrid"
                    class="font-bold text-xs bg-neutral text-neutral-content p-1 rounded-lg">{{
                    mapEditGridStore.map?.width}}x{{ mapEditGridStore.map?.height}}</div>
            </div>
        </div>
        <div class="h-full w-full overflow-auto flex">
            <div class="pt-16 px-4 pb-4 inline-block m-auto">
                <MapEditorGrid v-if="!mapEditGridStore.isOpeningEditGrid" />
            </div>
        </div>
    </div>
    <div class="h-screen max-h-[calc(100vh_-_64px)] lg:max-h-screen grid" v-if="showLoadingScreen">
        <div class="text-center font-bold inline-block m-auto">Loading Map Editor...</div>
    </div>
</template>
<script lang="ts" setup>
import { useRouteParams } from '@vueuse/router';
import { computed, defineAsyncComponent, onMounted } from 'vue';
import { useMapEditGridStore } from '../stores/mapEditGrid.store';

const GridToolbar = defineAsyncComponent(() => import('../components/GridToolbar.vue'))
const ButtonGridEditSettings = defineAsyncComponent(() => import('../components/ButtonGridEditSettings.vue'))
const MapEditorGrid = defineAsyncComponent(() => import('../components/MapEditorGrid.vue'))
const mapId = useRouteParams<string>('id')

const mapEditGridStore = useMapEditGridStore()

const showLoadingScreen = computed(() => mapEditGridStore.isOpeningEditGrid)

onMounted(() => {
    mapEditGridStore.openMapEditGrid(mapId.value)
})
</script>