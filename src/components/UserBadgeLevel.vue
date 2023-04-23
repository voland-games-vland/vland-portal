<template>
    <div v-if="level"
        class="level-badge inline-grid bg-neutral text-neutral-content place-items-center py-1 px-4 ml-2 text-sm border-b-2 border-x-2 border-neutral-focus">
        {{ level }}
    </div>
</template>
<script lang="ts" setup>
defineProps<{
    level: string
}>()
</script>