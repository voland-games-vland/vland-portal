<template>
<div>Page Home</div>
<img alt="Vue logo" src="../assets/logo.png" />
<HelloWorld msg="Hello My World"/>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const HelloWorld = defineAsyncComponent(() => import('../components/HelloWorld.vue'))
</script>