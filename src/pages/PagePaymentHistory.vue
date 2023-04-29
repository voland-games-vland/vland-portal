<template>
    <div class="p-4 grid gap-4">
        <NavigationBack to-back="/payment/credit-card">Payment History</NavigationBack>
        <div class="max-w-5xl mx-auto w-full">
            <div v-if="payments == null" class="text-center">Loading...</div>
            <div v-if="payments != null">
                <table class="table table-compact mx-auto">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>date</th>
                            <th>price</th>
                            <th>currency</th>
                            <th>method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="payment in payments">
                            <th>{{ payment._id }}</th>
                            <th>{{ useDateFormat(payment.createdAt, 'DD.MM.YYYY').value }}</th>
                            <th class="text-center">{{ payment.price / 100 }}</th>
                            <th class="text-center">{{ payment.currency }}</th>
                            <th class="text-center">{{ payment.method }}</th>
                        </tr>
                    </tbody>
                </table>
                <div v-if="!payments.length">No Results</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, onMounted, ref } from 'vue';
import vlandPaymentsApi, { Payment } from '../apis/vlandPayments.api';
import { getAuth } from 'firebase/auth';
import { useDateFormat } from '@vueuse/core';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))

const auth = getAuth()

const payments = ref<Payment[] | null>(null)

onMounted(async () => {
    const token = await auth.currentUser?.getIdToken()
    if (!token) return

    payments.value = await vlandPaymentsApi.users.me.payments.get(token)
})
</script>
<style scoped>
.table :where(thead, tfoot) :where(th, td) {
    @apply bg-slate-300;
}
.table :where(tbody th, tbody td) {
    @apply bg-slate-50;
}

:where(.table *:first-child) :where(*:first-child) :where(th, td):first-child {
    @apply rounded-tl-box;
}

:where(.table *:first-child) :where(*:first-child) :where(th, td):last-child {
    @apply rounded-tr-box;
}

:where(.table *:last-child) :where(*:last-child) :where(th, td):first-child {
    @apply rounded-bl-box;
}

:where(.table *:last-child) :where(*:last-child) :where(th, td):last-child {
    @apply rounded-br-box;
}
</style>