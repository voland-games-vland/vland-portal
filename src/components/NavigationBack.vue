<template>
    <div class="flex text-xl gap-2">
        <ButtonBack :toUrl="toBack" />
        <div class="font-light text-gray-400 tracking-[-0.35em] pr-2">//</div>
        <div class="text-base-content font-bold uppercase"><slot></slot></div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const ButtonBack = defineAsyncComponent(() => import('./ButtonBack.vue'))
defineProps<{
    toBack: string
}>()
</script>