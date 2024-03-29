<template>
    <a @click="startCheckout" class="group">
        <div class="relative cursor-pointer w-full">
            <div class="bg-gradient-to-tr from-slate-900 to-teal-900 bg-[position:_0%_0%] group-hover:bg-[position:_100%_100%] bg-[size:_500%] h-40 grid justify-center items-center transition-all duration-700">
                <div>
                    <IconBill height="54" width="54" class="mx-auto"/>
                    <div class="text-2xl text-green-300
                    font-bold text-center">{{ name }}</div>
                </div>
            </div>
            <div class="bg-slate-700 group-hover:bg-slate-800 p-3 transition-all duration-700">
                <div class="text-xs font-bold text-center text-slate-400">{{ description }}</div>
                <div class="text-xs font-bold text-center text-green-300">{{ descriptionHighlighted }}</div>
            </div>
            <div class="absolute top-0 right-0 p-3 text-slate-100 font-bold">€{{ amount / 100 }}</div>
        </div>
    </a>
</template>
  
<script lang="ts" setup>
import { loadStripe } from '@stripe/stripe-js';
import { getAuth } from '@firebase/auth';
import { defineAsyncComponent } from 'vue';

const IconBill = defineAsyncComponent(() => import('../components/IconBill.vue'))

const props = defineProps<{
    amount: number,
    name: string,
    description: string,
    descriptionHighlighted: string,
    id: string
}>()

const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY, {
    apiVersion: '2022-11-15'
});
const auth = getAuth()
const startCheckout = async () => {
    const token = await auth.currentUser?.getIdToken()
    if (!token) return
    const response = await fetch(`${import.meta.env.VITE_VLAND_API_STRIPE_URL}/create-checkout-session`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": 'no-cors',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            productId: props.id
        }),
    })
    const session = await response.json();
    const hasUserEmail = auth.currentUser?.email
    if (!hasUserEmail) {
        alert('No Email on user profile')
        return;
    }
    const res = await stripe?.redirectToCheckout({
        sessionId: session.id
    })

    if (res?.error) {
        alert('Payment System is broken')
    }
}
</script>
