<template>
    <div>
        <FormKit type="form" :actions="false" id="formMapNew" @submit="submit">
            <FormKit type="group" v-model="formData">
                <div class="grid justify-center">
                    <div class="text-xl text-center font-bold">Name</div>
                    <br />
                    <FormKit name="name" type="text" validation="required"
                        validation-visibility="blur" :disabled="isLoading" />
                </div>
            </FormKit>
        </FormKit>
        <div class="text-xl text-center font-bold">Size</div>
        <br />
        <div class="flex justify-center">
            <div class="btn-group">
                <button
                    v-for="size in sizes"
                    class="btn btn-lg btn-outline btn-square"
                    :class="{'btn-active': formData.size == size}"
                    @click="formData.size = size"
                >
                    {{size}}
                </button>
            </div>
        </div>
        <br />
        <br />
        <div class="flex justify-center">
            <button class="btn btn-primary" :class="{ loading: isLoading}" @click="$formkit.submit('formMapNew')">
                Create
                <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useMapsStore } from '../stores/maps.store';

const mapsStore = useMapsStore()

const formData = ref({
    name: 'My Map',
    size: 'M'
})

const sizes = ['XS', 'S', 'M', 'L', 'XL']

const isLoading = ref(false)

const submit = async () => {
    isLoading.value = true
    await mapsStore.createNewMap()
    isLoading.value = false
}
</script>