<template>
    <div>User:</div>
    <pre>{{ userStore.user }}</pre>
    <input v-model="userStore.user.displayName" />
</template>
<script lang="ts" setup>
import { useUserStore } from '../stores/user.store';

const userStore = useUserStore()
</script>