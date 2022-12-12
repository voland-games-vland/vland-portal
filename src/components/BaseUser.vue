<template>
    <div>User:</div>
    <pre>{{ user }}</pre>
    <div>Clan: <RouterLink to="/clan">Blaze Hood</RouterLink></div>
    <input v-model="user?.displayName" />
</template>
<script lang="ts" setup>

import { getAuth } from 'firebase/auth'
import { useAuth } from '@vueuse/firebase/useAuth'
const { user } = useAuth(getAuth())
</script>