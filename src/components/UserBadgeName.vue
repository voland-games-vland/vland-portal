<template>
    <div v-if="name" class="name-badge bg-neutral text-neutral-content border-4 border-neutral-focus p-2 normal-case font-bold">
        {{ name }}
    </div>
</template>
<script lang="ts" setup>
defineProps<{
    name: string
}>()
</script>
<style scoped>
.name-badge {
    clip-path: polygon(0 0, 95% 0, 85% 100%, 0 100%);
}
</style>