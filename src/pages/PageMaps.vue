<template>
    <div class="p-4">
        <NavigationBack toBack="/start">Maps</NavigationBack>
        <RouterLink to="/maps/new" class="link link-primary">New Map</RouterLink>
        <div>Map 1</div>
        <div>Map 2</div>
        <div>Map 3</div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
</script>
<style scoped>
</style>