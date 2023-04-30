<template>
    <div class="p-4 grid gap-4">
        <NavigationBack toBack="/start">Characters</NavigationBack>
        <div>Page Characters</div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
</script>