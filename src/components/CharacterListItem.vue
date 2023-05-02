<template>
    <RouterLink :to="`/characters/edit/${id}`" class="group grid gap-2 bg-slate-900 text-slate-300 hover:text-slate-50 p-4 text-center border-4 border-slate-700 hover:bg-slate-800 hover:border-slate-800 transition-all duration-300">
        <div class="font-bold text-xl truncate">{{ name }}</div>
        <div class="flex justify-center">
            <div class="w-12 h-12 bg-slate-500 truncate text-xs font-bold flex items-center justify-center">
                <div class="rotate-45">{{ weaponType }}</div>
            </div>
        </div>
    </RouterLink>
</template>
<script setup lang="ts">
defineProps<{
    id: string,
    name: string,
    weaponType: string
}>()
</script>