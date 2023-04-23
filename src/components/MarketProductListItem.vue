<template>
    <div
        class="group bg-slate-900 hover:bg-slate-800 transition border-4 border-slate-700 hover:border-slate-800 relative cursor-pointer aspect-[4_/_3]">
        <div class="top-0 right-0 absolute pr-2 pt-1 text-slate-400 font-bold flex gap-1 group-hover:text-slate-300 transition-colors">
            <div class="flex items-center justify-end gap-1" v-if="priceInBills">
                <div>{{ priceInBills }}</div>
                <IconBill />
            </div>
            <div class="w-px bg-slate-700 group-hover:bg-slate-600 transition-colors" v-if="priceInBills && priceInCoins"></div>
            <div class="flex items-center justify-end gap-1" v-if="priceInCoins">
                <div>{{ priceInCoins }}</div>
                <IconCoin />
            </div>
        </div>
        <div class="absolute bottom-0 w-full h-full flex-row py-1 px-2 grid grid-rows-[1fr_auto_auto] gap-1">
            <div class="border-l border-slate-900 group-hover:border-slate-500 transition-colors duration-500"></div>
            <div class="inline-block text-xl font-bold text-slate-100 group-hover:pl-2 transition-all">{{ title }}</div>
            <div>
                <hr class="border-slate-900 group-hover:border-slate-500 transition-colors duration-500" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const IconCoin = defineAsyncComponent(() => import('./IconCoin.vue'))
const IconBill = defineAsyncComponent(() => import('./IconBill.vue'))
defineProps<{
    title: string
    priceInCoins?: number
    priceInBills?: number
}>()
</script>