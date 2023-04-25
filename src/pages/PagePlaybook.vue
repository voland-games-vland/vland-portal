<template>
    <div class="p-4 grid gap-4">
        <NavigationBack toBack="/start">Playbook</NavigationBack>
        <article class="prose">
            <h1>V-Land Guide</h1>
            <p>In this guide the content, mechanics and rules of the game are going to be explained.</p>
            <p>V-Land is a Sandbox MOBA in shortform Saba, where you build and play your own maps.</p>
            <!-- ... -->
        </article>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
</script>