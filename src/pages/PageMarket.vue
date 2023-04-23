<template>
    <div class="p-4 grid gap-4">
        <NavigationBack toBack="/start">Market</NavigationBack>
        <MarketProductList :list="listProducts" />
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))

const MarketProductList = defineAsyncComponent(() => import('../components/MarketProductList.vue'))

const listProducts = ref([
    {
        title: 'Product 234',
        priceInCoins: 6000,
        priceInBills: 420
    },
    {
        title: 'Product 562',
        priceInCoins: 2000
    },
    {
        title: 'Product 734',
        priceInCoins: 960,
        priceInBills: 60
    },
    {
        title: 'Product 2472',
        priceInCoins: 10000,
        priceInBills: 960
    },
    {
        title: 'Product 3442',
        priceInBills: 550
    },
    {
        title: 'Product 54682',
        priceInCoins: 3200,
        priceInBills: 230
    },
])
</script>
<style scoped></style>