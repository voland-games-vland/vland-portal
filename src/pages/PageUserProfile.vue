<template>
    <div>
        <div>Page User Profile</div>
        <BaseUser></BaseUser>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const BaseUser = defineAsyncComponent(() => import('../components/BaseUser.vue'))
</script>