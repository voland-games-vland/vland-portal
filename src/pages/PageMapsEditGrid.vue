<template>
    <div class="min-h-screen relative bg-slate-300">
        <div class="absolute top-4 left-4 right-4 inline-grid grid-cols-[1fr_2fr_1fr]">
            <div>
                <ButtonBack :toUrl="`/maps/edit/${mapId}/settings`" class="btn btn-sm" />
            </div>
            <div class="grid justify-center">
                <GridToolbar />
            </div>
            <div></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRouteParams } from '@vueuse/router';
import { defineAsyncComponent } from 'vue';
const ButtonBack = defineAsyncComponent(() => import('../components/ButtonBack.vue'))
const GridToolbar = defineAsyncComponent(() => import('../components/GridToolbar.vue'))
const mapId = useRouteParams<string>('id')
</script>