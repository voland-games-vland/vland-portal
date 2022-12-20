<template>
    <div class="p-4">
        <div class="prose">
            <h1>Hello {{ user?.email }}</h1>
            <h2>Welcome to V-Land</h2>
            <p>V-Land is a Sandbox MOBA game, where you build and play your own maps.</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { getAuth } from 'firebase/auth'
import { useAuth } from '@vueuse/firebase/useAuth'
const { user } = useAuth(getAuth())
</script>
<style scoped>

</style>