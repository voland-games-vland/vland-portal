<template>
    <div class="grid">
        <div class="left">
            <img alt="Character Artwork" src="../assets/artwork1.jpeg" class="artwork" />
        </div>
        <div class="right">
            <div class="title">Vland Portal</div>
            <FormKit type="form" submit-label="Login" @submit="login">
                <FormKit type="group" v-model="formData">
                    <FormKit name="email" type="email" label="Email" placeholder="user@example.com" validation="required|email"
                        validation-visibility="blur" />
                    <FormKit type="password" name="password" label="Password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" 
                        validation="required|length:8|matches:/[0-9]/" validation-visibility="blur"
                        :validation-messages="{ matches: 'Passwords must include a number.' }" />
                    <!--
                    <FormKit type="password" name="password_confirm" label="Confirm password"
                        help="Confirm your new password" validation="required|confirm" validation-visibility="blur"
                        validation-label="Password confirmation" />
                    -->
                </FormKit>
            </FormKit>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const formData = ref({})

const login = () => {
    console.log('login')
}
</script>
<style scoped>
.title {
    font-size: 2.4rem;
    padding-bottom: 2rem;
}

.grid {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100%;
}

.left {
    box-shadow: 0px 0px 3px 1px #000000;
}

.artwork {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.right {
    max-width: 300px;
    width: 300px;
    padding: 2rem;
}
</style>