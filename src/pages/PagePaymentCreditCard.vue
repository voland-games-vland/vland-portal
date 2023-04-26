<template>
  <div class="p-4 grid gap-4">
    <NavigationBack toBack="/start">Payment - Credit Card</NavigationBack>
    <div class="text-4xl font-bold text-center">SELECT V-Land POINTS</div>
    <div class="max-w-5xl mx-auto">
        <div class="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div v-for="product in products">
                <suspense>
                    <template #default>
                        <RcProduct :amount="product.amount" :name="product.name" :description="product.description"
                            :id="product.id"></RcProduct>
                    </template>
                </suspense>
            </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
const RcProduct = defineAsyncComponent(() => import('../components/RcProduct.vue'))

const products = ref([
  {
    amount: 500,
    name: '475',
    description: '475 V-Land Points + 0 bonus V-Land Points',
    id: 'prod_KgJ30IByFKidYr'
  },

  {
    amount: 1000,
    name: '1000',
    description: '950 V-Land Points + 50 bonus V-Land Points',
    id: 'prod_KgJ440e8f81VCO'
  },

  {
    amount: 2000,
    name: '2050',
    description: '1900 V-Land Points + 150 bonus V-Land Points',
    id: 'prod_KgJ4oaAsM0p4Vy'
  },

  {
    amount: 3500,
    name: '3650',
    description: '3330 V-Land Points + 320 bonus V-Land Points',
    id: 'prod_KgJ6wwUoa9iYIN'
  },

  {
    amount: 5000,
    name: '5350',
    description: '4750 V-Land Points + 600 bonus V-Land Points',
    id: 'prod_KgJ8QPHpL2bmDZ'
  },

  {
    amount: 10000,
    name: '11000',
    description: '9500 V-Land Points + 1500 bonus V-Land Points',
    id: 'prod_KgJ9lnd2qHVlHj'
  }
])
</script>
