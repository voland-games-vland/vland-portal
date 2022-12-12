<template>
    <div class="title">Registration</div>
    <FormKit type="form" submit-label="Sign up" @submit="submit">
        <FormKit type="group" v-model="formData">
            <FormKit name="email" type="email" label="Email" placeholder="user@example.com" validation="required|email"
                validation-visibility="blur" />
            <FormKit type="password" name="password" label="Password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                validation="required|length:8|matches:/[0-9]/" validation-visibility="blur"
                :validation-messages="{ matches: 'Passwords must include a number.' }" />
            <FormKit type="password" name="password_confirm" label="Confirm password" help="Confirm your new password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                validation="required|confirm" validation-visibility="blur" validation-label="Password confirmation" />
        </FormKit>
    </FormKit>
    <router-link to="/"><button class="btn btn-ghost btn-xs">I already have a login</button></router-link>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter()
const formData = ref({})

const submit = () => {
    console.log('registration')
    router.push('/user/profile')
}
</script>
<style scoped>
.title {
    padding-bottom: 1rem;
}
</style>