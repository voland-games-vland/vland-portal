<template>
    <div class="grid justify-center p-4 gap-2">
        <h1 class="text-4xl font-bold">Page Not Found</h1>
        <div class="grid justify-center">
            <RouterLink to="/start" class="underline hover:text-primary-focus">Back to Home</RouterLink>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>