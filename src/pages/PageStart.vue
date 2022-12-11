<template>
<LayoutSidenavigation>
    <div>Page Start</div>
</LayoutSidenavigation>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const LayoutSidenavigation = defineAsyncComponent(() => import('../layouts/LayoutSidenavigation.vue'))
</script>
<style scoped>
</style>