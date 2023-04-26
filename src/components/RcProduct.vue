<template>
    <a @click="startCheckout">
      <div class="container">
        <div class="top">
          <div class="name">{{ name }}</div>
        </div>
        <div class="bottom">
          <div class="description">{{ description }}</div>
        </div>
        <div class="price">€{{ amount / 100 }}</div>
      </div>
    </a>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { loadStripe } from '@stripe/stripe-js';
  import { getAuth } from '@firebase/auth';
  
  export default defineComponent({
    name: "RcProduct",
    components: {
    },
    props: {
      amount: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      },
    },
    async setup(props) {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY, {
        apiVersion: '2022-11-15'
      });
      const auth = getAuth()
      const startCheckout = async () => {
        const token = await auth.currentUser?.getIdToken()
        if(!token) return
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
      return {
        startCheckout,
      }
    }
  });
  </script>
  
  <style scoped>
  .container {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
  
  .top {
    background-color: hsl(214deg 23% 33%);
    height: 150px;
    display: grid;
    align-items: center;
    padding: 10px;
  }
  
  .bottom {
    background-color: hsl(211deg 20% 45%);
    padding: 10px;
  }
  
  .container:hover > .top {
    background-color: hsl(214deg 23% 38%);
  }
  
  .container:hover > .bottom {
    background-color: hsl(211deg 20% 50%);
  }
  
  .name {
    font-size: x-large;
    color: #bdf8ec;
    font-weight: bold;
  }
  .description {
    font-size: small;
    font-weight: bold;
  }
  .price {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    color: #edf6fe;
    font-weight: bold;
  }
  </style>