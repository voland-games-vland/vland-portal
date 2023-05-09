<template>
    <div class="p-4 grid gap-4">
        <div class="prose">
            <h1>Hello {{ userStore.user?.nickname }}</h1>
            <h2>Welcome to V-Land</h2>
            <p>V-Land is a Sandbox MOBA, where you build and play your own maps.</p>
            <RouterLink to="/playbook">Playbook</RouterLink>
        </div>
        <br />
        <h2 class="text-2xl font-bold">Personal Stats</h2>
        <UserStats class="max-w-lg" />
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useUserStore } from '../stores/user.store';
const UserStats = defineAsyncComponent(() => import('../components/UserStats.vue'))
const userStore = useUserStore()
</script>