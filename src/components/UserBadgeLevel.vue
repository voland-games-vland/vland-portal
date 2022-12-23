<template>
    <div class="level-badge inline-grid bg-neutral text-neutral-content place-items-center py-1 px-4 ml-1 text-sm">
        {{ level }}
    </div>
</template>
<script lang="ts" setup>
defineProps<{
    level: string
}>()
</script>