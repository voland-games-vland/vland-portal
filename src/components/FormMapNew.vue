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
                <IconArrowRight v-if="!isLoading" class="h-5 w-5" />
            </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';
import { SIZE } from '../apis/vland.api';
import { useMapsStore } from '../stores/maps.store';

const IconArrowRight = defineAsyncComponent(() => import('../components/IconArrowRight.vue'))

const mapsStore = useMapsStore()

const formData = ref({
    name: 'My Map',
    size: SIZE.M
})

const sizes: SIZE[] = [SIZE.XS, SIZE.S, SIZE.M, SIZE.L, SIZE.XL]

const isLoading = ref(false)

const submit = async () => {
    isLoading.value = true
    await mapsStore.createNewMap(formData.value)
    isLoading.value = false
}
</script>