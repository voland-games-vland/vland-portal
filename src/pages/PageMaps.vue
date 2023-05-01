<template>
    <div class="p-4 grid gap-4">
        <NavigationBack toBack="/start">Maps</NavigationBack>
        <div>
            <RouterLink to="/maps/new" class="btn btn-ghost btn-sm">
                <IconPlus class="mr-2"  width="12" height="12" />
                <span>New Map</span>
            </RouterLink>
        </div>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(242px,1fr))] gap-4">
            <div v-for="map in myMapsStore.maps" :key="map._id" class="group">
                <RouterLink :to="`/maps/edit/${map._id}/grid`">
                    <div
                        class="px-4 py-10 text-center bg-slate-900 text-slate-300 group-hover:text-slate-50 font-bold transition-all duration-300 text-xl truncate border-4 border-slate-700 hover:bg-slate-800  hover:border-slate-800 flex justify-between">
                        <div class="border-l border-slate-900 group-hover:border-slate-500 mb-5 group-hover:mb-0 transition-all duration-500"></div>
                        <div>{{ map.name }}</div>
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
const IconPlus = defineAsyncComponent(() => import('../components/IconPlus.vue'))

const myMapsStore = useMyMapsStore()
myMapsStore.loadMyMaps()
</script>
<style scoped>

</style>