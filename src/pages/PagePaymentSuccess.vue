<template>
    <div class="p-4 grid gap-2">
        <NavigationBack toBack="/start">Payment Success</NavigationBack>
        <div class="text-center text-4xl font-bold">Payment via Stripe Success</div>
        <div class="text-2xl flex justify-center items-center gap-2" v-if="pointsTotal">
            <span>Received</span>
            <span><IconBill width="50" height="50" /></span>
            <span class="text-3xl text-green-500 font-bold">{{ pointsTotal }}</span>
            <span>V-Land Points.</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRouteQuery } from "@vueuse/router";
import { computed, defineAsyncComponent } from "vue";

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
const IconBill = defineAsyncComponent(() => import('../components/IconBill.vue'))

const points = useRouteQuery<string>('points', undefined)
const pointsBonus = useRouteQuery<string>('pointsBonus', undefined)
const pointsTotal = computed(() => Number(points.value) + Number(pointsBonus.value))
</script>