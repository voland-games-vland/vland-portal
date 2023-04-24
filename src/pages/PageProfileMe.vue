<template>
    <div class="p-4">
        <NavigationBack toBack="/start">Me</NavigationBack>
        Player stuff :)
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
</script>