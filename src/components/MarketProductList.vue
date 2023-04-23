<template>
    <div class="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
        <MarketProductListItem
            v-for="item in list"
            :title="item.title"
            :price-in-bills="item.priceInBills"
            :price-in-coins="item.priceInCoins"
        />
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const MarketProductListItem = defineAsyncComponent(() => import('./MarketProductListItem.vue'))

defineProps<{
    list: {
        title: string
        priceInCoins: number
        priceInBills: number
    }[]
}>()
</script>