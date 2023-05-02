<template>
    <div class="p-4">
        <NavigationBack toBack="/maps">Maps_New</NavigationBack>
        <br />
        <FormMapNew />
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
const FormMapNew = defineAsyncComponent(() => import('../components/FormMapNew.vue'))
</script>