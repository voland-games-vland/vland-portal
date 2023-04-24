<template>
    <div class="p-4 grid gap-4">
        <NavigationBack toBack="/start">Playbook</NavigationBack>
        <article class="prose">
            <h1>Guide</h1>
            <p>In this guide the content, mechanics and rules of the game are going to be explained.</p>
            <!-- ... -->
        </article>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
</script>