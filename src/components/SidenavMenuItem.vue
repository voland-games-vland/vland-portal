<template>
    <li>
        <RouterLink :to="to"
            class="text-xl group transition-all duration-300 ease-in-out border border-slate-400 hover:border-gray-400 [&.active]:border-primary-focus grid grid-cols-[auto_auto_1fr] grid-rows-1"
            active-class="active">
            <div>
                <slot name="icon"></slot>
            </div>
            <div class="transition-all duration-300 ease-in-out group-hover:pl-3 group-[&.active]:pl-3">
                <slot name="label"></slot>
            </div>
            <!--
                <div class="h-full pt-4 group-hover:pt-0 group-[&.active]:pt-0 transition-all duration-500">
                    <div class="h-full border-r-4 border-transparent group-hover:border-primary-content group-[&.active]:border-primary-focus transition-all duration-500"></div>
                </div>
            -->
        </RouterLink>
    </li>
</template>
<script lang="ts" setup>
defineProps<{
    to: string
}>()
</script>