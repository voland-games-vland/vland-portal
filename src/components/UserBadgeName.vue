<template>
    <RouterLink to="/profile-me" class="group" active-class="active">
        <div v-if="name" class="name-badge bg-neutral group-hover:bg-neutral-focus group-[&.active]:bg-neutral-focus transition-colors text-neutral-content border-4 border-neutral-focus p-1 normal-case font-bold">
            <div class="border-t border-transparent group-hover:border-slate-600 group-[&.active]:border-slate-500 mr-40 group-hover:mr-6 group-[&.active]:mr-6 transition-all duration-500"></div>
            <div>{{ name }}</div>
            <div class="border-b border-transparent"></div>
        </div>
    </RouterLink>
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