<template>
    <div class="grid">
        <div class="left">
            <img alt="Character Artwork" src="../assets/artwork1.jpeg" class="artwork" />
        </div>
        <div class="right">
            <div>Vland Portal</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
</script>
<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100%;
}

.left {
    height: 100%;
    box-shadow: 0px 0px 3px 1px #000000;
}

.artwork {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.right {
    height: 100%;
    max-width: 300px;
    padding: 2rem;
}
</style>