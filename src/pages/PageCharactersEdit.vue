<template>
    <div class="p-4 grid gap-4">
        <NavigationBack toBack="/characters">Characters_Edit</NavigationBack>
        Page Char Edit
    </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
</script>