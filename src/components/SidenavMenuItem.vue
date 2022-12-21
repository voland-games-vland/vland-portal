<template>
    <li>
        <RouterLink :to="to"
            class="text-xl group transition-all duration-300 ease-in-out border-4 border-transparent hover:border-4 hover:border-gray-400 [&.active]:border-primary-focus"
            active-class="active">
            <div>
                <slot name="icon"></slot>
            </div>
            <span class="transition-all duration-300 ease-in-out group-hover:pl-3 group-[&.active]:pl-3">
                <slot name="label"></slot>
            </span>
        </RouterLink>
    </li>
</template>
<script lang="ts" setup>
defineProps<{
    to: string
}>()
</script>