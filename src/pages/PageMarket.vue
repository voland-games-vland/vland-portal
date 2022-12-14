<template>
    <div class="p-4">
        <NavigationBack toBack="/start">Market</NavigationBack>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
</script>
<style scoped>
</style>