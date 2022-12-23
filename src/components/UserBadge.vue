<template>
    <div>
        <UserBadgeName :name="name" />
        <UserBadgeLevel :level="level" />
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const UserBadgeName = defineAsyncComponent(() => import('./UserBadgeName.vue'))
const UserBadgeLevel = defineAsyncComponent(() => import('./UserBadgeLevel.vue'))

defineProps<{
    level: string
    name: string
}>()
</script>