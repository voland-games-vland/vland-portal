<template>
<div>User:</div>
<pre>{{ userStore.user }}</pre>
<input v-model="userStore.user.displayName" />
<div>{{ x }}</div>
</template>
<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { useUserStore } from '../stores/user.store';


const userStore = useUserStore()

const x = computed(() => {
    return userStore.user.uid + userStore.user.email + userStore.user.displayName
})
</script>