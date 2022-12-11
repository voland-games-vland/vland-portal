<template>
    <LayoutSidenavigation>
        <div class="p-4">
            <div class="prose">
                <h1>Welcome to V-Land</h1>
                <p>V-Land is a Sandbox game, where you build and play your own maps.</p>
            </div>
        </div>
    </LayoutSidenavigation>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const LayoutSidenavigation = defineAsyncComponent(() => import('../layouts/LayoutSidenavigation.vue'))
</script>
<style scoped>

</style>