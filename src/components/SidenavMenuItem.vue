<template>
<li>
    <RouterLink :to="to" class="text-xl group transition-all duration-300 ease-in-out" active-class="active">
        <div><slot name="icon"></slot></div>
        <span class="transition-all duration-300 ease-in-out group-hover:pl-3 group-[&.active]:pl-3"><slot name="label"></slot></span>
    </RouterLink>
</li>
</template>
<script lang="ts" setup>
defineProps<{
    to: string
}>()
</script>