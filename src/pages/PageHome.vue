<template>
    <div class="grid">
        <div class="left">
        </div>
        <div class="right">
            <div class="title">Vland Portal</div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.title {
    font-size: 2.4rem;
    padding-bottom: 2rem;
}

.grid {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100%;
}

.left {
    box-shadow: 0px 0px 3px 1px #000000;
    background-image: url('../assets/artwork1.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.right {
    max-width: 300px;
    width: 300px;
    padding: 2rem;
}
</style>