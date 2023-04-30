<template>
    <div class="grid grid-cols-[auto_1fr] grid-rows-[1fr] h-full">
        <div class="w-80 max-w-80 p-8">
            <div class="text-4xl uppercase pb-4 font-bold text-center">V-Land</div>
            <br />
            <router-view></router-view>
        </div>
        <div class="right bg-center bg-no-repeat bg-cover">
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>

.right {
    box-shadow: 0px 0px 3px 1px #000000;
    background-image: url('../assets/artwork1.jpeg');
}
</style>