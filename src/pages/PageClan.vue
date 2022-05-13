<template>
<div class="grid">
    <div class="grid-item left">
        <div class="title">BLAZE HOOD</div>
        <div>
            <div>□ <RouterLink :to="'/user/profile'">Wenish</RouterLink></div>
            <div>△ <RouterLink :to="'/user/profile'">Doggy</RouterLink></div>
            <div>△ <RouterLink :to="'/user/profile'">Mark1</RouterLink></div>
            <div>◯ <RouterLink :to="'/user/profile'">Peter</RouterLink></div>
            <div>◯ <RouterLink :to="'/user/profile'">Nika</RouterLink></div>
            <div>◯ <RouterLink :to="'/user/profile'">Tsunami</RouterLink></div>
            <div class="invite">+ Invite Player</div>
        </div>
    </div>
    <div class="grid-item right">
        Here CLANG FLAG
    </div>
</div>
</template>
<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>
<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.grid-item {
    padding: 4rem;
}

.right {
    display: grid;
    justify-items: center;
}

.title {
    font-size: 6rem;
}

.invite {
    color: var(--text-2);
}
</style>