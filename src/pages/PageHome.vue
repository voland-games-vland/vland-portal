<template>
    <div class="grid">
        <div class="left">
            <div class="text-4xl uppercase pb-4 font-bold text-center">V-Land</div>
            <br />
            <router-view></router-view>
        </div>
        <div class="right">
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>

.grid {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100%;
}

.right {
    box-shadow: 0px 0px 3px 1px #000000;
    background-image: url('../assets/artwork1.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.left {
    max-width: 300px;
    width: 300px;
    padding: 2rem;
}
</style>