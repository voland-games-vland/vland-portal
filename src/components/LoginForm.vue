<template>
    <div class="title">Login</div>
    <FormKit type="form" submit-label="Sign in" @submit="submit">
        <FormKit type="group" v-model="formData">
            <FormKit name="email" type="email" label="Email" placeholder="user@example.com" validation="required|email"
                validation-visibility="blur" />
            <FormKit type="password" name="password" label="Password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                validation="required" validation-visibility="blur" />
        </FormKit>
    </FormKit>
    <router-link :to="'/registration'">Sign up</router-link>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter()
const formData = ref({})

const submit = () => {
    console.log('login')
    router.push('/start')
}
</script>
<style scoped>
.title {
    padding-bottom: 1rem;
}
</style>