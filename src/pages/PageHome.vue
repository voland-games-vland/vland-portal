<template>
<div>Page Home</div>
<img alt="Character Artwork" src="../assets/artwork1.jpeg" class="artwork" />
<BaseUser></BaseUser>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const BaseUser = defineAsyncComponent(() => import('../components/BaseUser.vue'))
</script>
<style scoped>
.artwork {
    max-width: 300px;
}
</style>