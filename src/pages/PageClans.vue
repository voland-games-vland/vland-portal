<template>
    <div class="p-4">
        <NavigationBack toBack="/start">Clans</NavigationBack>
        Soon Clans will rise :)
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
</script>
<style scoped>
</style>