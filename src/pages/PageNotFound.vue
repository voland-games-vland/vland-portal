<template>
    <div class="container">
        <div>Page Not Found</div>
        <RouterLink to="/">Back to Home</RouterLink>
    </div>
</template>
<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>
<style scoped>
.container {
    display: grid;
    justify-content: center;
}
</style>