<template>
    <div class="p-4">
        <NavigationBack toBack="/start">Maps</NavigationBack>
        <RouterLink to="/maps/new" class="link link-primary">New Map</RouterLink>
        <div v-for="map in myMapsStore.maps" :key="map._id"><RouterLink :to="`/maps/edit/${map._id}/settings`" class="link link-secondary">{{ map.name }}</RouterLink></div>
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