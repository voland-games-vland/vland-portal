<template>
<div class="grid">
    <div class="text-sm">{{ label }}</div>
    <div class="inline-flex gap-1 items-center">
        <progress class="progress w-full" :value="value" :max="max"></progress>
        <button type="button" class="btn btn-square btn-xs" @click="$emit('subtract')" :disabled="!value">-</button>
        <button type="button" class="btn btn-square btn-xs" @click="$emit('add')" :disabled="disabledAdd">+</button>
    </div>
</div>
</template>
<script setup lang="ts">
defineProps<{
    label: string,
    value: number,
    max: number,
    disabledAdd: boolean
}>()

defineEmits<{
    (e: 'add'): void,
    (e: 'subtract'): void
}>()
</script>