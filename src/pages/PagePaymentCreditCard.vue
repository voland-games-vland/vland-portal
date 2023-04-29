<template>
  <div class="p-4 grid gap-4">
    <NavigationBack toBack="/start">Payment - Credit Card</NavigationBack>
    <div class="text-4xl font-bold text-center">SELECT V-Land POINTS</div>
    <div class="font-bold text-center text-blue-500">(ALL PRICES ARE INCLUSIVE OF VAT IF APPLICABLE)</div>
    <div class="max-w-4xl w-full mx-auto grid gap-4 grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] overflow-hidden">
        <div v-for="product in products">
            <suspense >
                <template #default>
                    <PointsProduct :amount="product.amount" :name="product.name" :description="product.description" :descriptionHighlighted="product.descriptionHighlighted"
                        :id="product.id"></PointsProduct>
                </template>
            </suspense>
        </div>
    </div>
    <PaymentInfo class="text-center" />
    <div class="text-center text-blue-400">
      <RouterLink to="/payment/history">Payment History</RouterLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
const PointsProduct = defineAsyncComponent(() => import('../components/PointsProduct.vue'))
const PaymentInfo = defineAsyncComponent(() => import('../components/PaymentInfo.vue'))

const products = ref([
  {
    amount: 500,
    name: '475',
    description: '475 V-Land Points',
    descriptionHighlighted: '+ 0 bonus V-Land Points',
    id: 'prod_KgJ30IByFKidYr'
  },

  {
    amount: 1000,
    name: '1000',
    description: '950 V-Land Points',
    descriptionHighlighted: '+ 50 bonus V-Land Points',
    id: 'prod_KgJ440e8f81VCO'
  },

  {
    amount: 2000,
    name: '2050',
    description: '1900 V-Land Points',
    descriptionHighlighted: '+ 150 bonus V-Land Points',
    id: 'prod_KgJ4oaAsM0p4Vy'
  },

  {
    amount: 3500,
    name: '3650',
    description: '3330 V-Land Points',
    descriptionHighlighted: '+ 320 bonus V-Land Points',
    id: 'prod_KgJ6wwUoa9iYIN'
  },

  {
    amount: 5000,
    name: '5350',
    description: '4750 V-Land Points',
    descriptionHighlighted: '+ 600 bonus V-Land Points',
    id: 'prod_KgJ8QPHpL2bmDZ'
  },

  {
    amount: 10000,
    name: '11000',
    description: '9500 V-Land Points',
    descriptionHighlighted: '+ 1500 bonus V-Land Points',
    id: 'prod_KgJ9lnd2qHVlHj'
  }
])
</script>
