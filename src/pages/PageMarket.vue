<template>
<LayoutSidenavigation>
    <div class="p-4">Page Market</div>
</LayoutSidenavigation>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const LayoutSidenavigation = defineAsyncComponent(() => import('../layouts/LayoutSidenavigation.vue'))
</script>
<style scoped>
</style>