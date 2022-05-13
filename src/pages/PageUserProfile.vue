<template>
    <div>
        <div>Page User Profile</div>
        <BaseUser></BaseUser>
        <div><RouterLink :to="'/'">Logout</RouterLink></div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { RouterLink } from 'vue-router';

const BaseUser = defineAsyncComponent(() => import('../components/BaseUser.vue'))
</script>