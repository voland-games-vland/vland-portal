<template>
    <div>User:</div>
    <pre>{{ userStore.user }}</pre>
    <div>Clan: <RouterLink to="/clan">Blaze Hood</RouterLink></div>
    <input v-model="userStore.user.displayName" />
</template>
<script lang="ts" setup>
import { useUserStore } from '../stores/user.store';
import { RouterLink } from 'vue-router';

const userStore = useUserStore()
</script>