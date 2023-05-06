<template>
<button class="btn btn-xs font-bold text-sm bg-neutral text-neutral-content rounded-btn pointer-events-auto" :disabled="isLoading">
    <span v-if="isLoading">Loading...</span>
    <span v-if="!isLoading">{{ name }}</span>
</button>
</template>
<script setup lang="ts">
defineProps<{
    isLoading?: boolean,
    name?: string
}>()
</script>