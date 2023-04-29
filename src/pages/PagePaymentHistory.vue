<template>
    <div class="p-4 grid gap-4">
        <NavigationBack to-back="/payment/credit-card">Payment History</NavigationBack>
        <div class="max-w-5xl mx-auto w-full">
            <div v-if="payments == null">Loading...</div>
            <div v-if="payments != null">
                <table class="table table-compact w-full">
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
                            <th>{{ payment.price / 100 }}</th>
                            <th>{{ payment.currency }}</th>
                            <th>{{ payment.method }}</th>
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