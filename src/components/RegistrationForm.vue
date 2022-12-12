<template>
    <div class="text-xl text-center font-bold">Sign Up</div>
    <FormKit type="form" :actions="false" id="sign-up-form"  @submit="submit">
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
    <br />
    <div class="flex justify-center">
        <button class="btn btn-lg btn-square btn-primary" :class="{ loading: isSigningUp}" @click="$formkit.submit('sign-up-form')">
            <svg v-if="!isSigningUp" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
    </div>
    <br />
    <br />
    <div class="flex justify-center">
        
    <router-link to="/"><button class="btn btn-ghost btn-xs">I already have an account</button></router-link>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.store';

const userStore = useUserStore()

const formData = ref({
    email: '',
    password: '',
    password_confirm: ''
})

const isSigningUp = ref(false)

const submit = async () => {
    isSigningUp.value = true
    await userStore.signUpWithEmailPassword(formData.value.email, formData.value.password)
    isSigningUp.value = false
}

</script>