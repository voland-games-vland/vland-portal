<template>
<div class="grid">
    <div class="text-sm">{{ label }} + <span class="font-bold">{{ value }}</span></div>
    <div class="inline-flex gap-1 items-center">
        <div class="w-full relative">
            <progress class="progress w-full" :value="value" :max="max"></progress>
            <div class="w-full flex justify-between text-xs absolute top-[calc(50%-0.1rem)]">
                <span class="w-[1px] h-2 bg-primary-focus first:bg-transparent last:bg-transparent" v-for="index in max + 1"></span>
            </div>
        </div>
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