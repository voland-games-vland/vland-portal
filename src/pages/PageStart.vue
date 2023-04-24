<template>
    <div class="p-4">
        <div class="prose">
            <h1>Hello {{ userStore.user?.nickname }}</h1>
            <h2>Welcome to V-Land</h2>
            <p>V-Land is a Sandbox MOBA, where you build and play your own maps.</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '../stores/user.store';
const userStore = useUserStore()
</script>