<template>
    <div class="p-4 grid gap-4">
        <NavigationBack toBack="/start">Maps</NavigationBack>
        <div class="font-bold text-4xl">My Maps</div>
        <div>
            <RouterLink to="/maps/new" class="btn btn-ghost btn-sm">
                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="12" height="14" viewBox="0 0 14 14" version="1.1">
                    <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->
                    <title>add</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Rounded" transform="translate(-411.000000, -1487.000000)">
                            <g id="Content" transform="translate(100.000000, 1428.000000)">
                                <g id="-Round-/-Content-/-add" transform="translate(306.000000, 54.000000)">
                                    <g transform="translate(0.000000, 0.000000)">
                                        <polygon id="Path" points="0 0 24 0 24 24 0 24" />
                                        <path
                                            d="M18,13 L13,13 L13,18 C13,18.55 12.55,19 12,19 C11.45,19 11,18.55 11,18 L11,13 L6,13 C5.45,13 5,12.55 5,12 C5,11.45 5.45,11 6,11 L11,11 L11,6 C11,5.45 11.45,5 12,5 C12.55,5 13,5.45 13,6 L13,11 L18,11 C18.55,11 19,11.45 19,12 C19,12.55 18.55,13 18,13 Z"
                                            id="🔹Icon-Color" fill="#1D1D1D" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <span>New Map</span>
            </RouterLink>
        </div>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(242px,1fr))] gap-4">
            <div v-for="map in myMapsStore.maps" :key="map._id" class="group">
                <RouterLink :to="`/maps/edit/${map._id}/grid`">
                    <div
                        class="px-4 py-10 text-center bg-slate-900 text-slate-300 group-hover:text-slate-50 font-bold transition-all duration-300 text-xl truncate border-4 border-slate-700 hover:bg-slate-800  hover:border-slate-800 flex justify-between">
                        <div class="border-l border-slate-900 group-hover:border-slate-500 mb-5 group-hover:mb-0 transition-all duration-500"></div>
                        <div class="rotate-0 scale-100 group-hover:scale-110 group-hover:rotate-2 transition-transform">{{ map.name }}</div>
                        <div class="border-r border-slate-900 group-hover:border-slate-500 mt-5 group-hover:mt-0 transition-all duration-500"></div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useMyMapsStore } from '../stores/myMaps.store';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))

const myMapsStore = useMyMapsStore()
myMapsStore.loadMyMaps()
</script>
<style scoped>

</style>