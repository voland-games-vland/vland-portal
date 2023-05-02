<template>
    <div class="grid gap-2">
        <h2 class="font-bold text-2xl">New Character</h2>
        <FormKit type="form" id="form-character-new" :actions="false" @submit="onSubmit">
            <FormKit type="text" name="name" label="Name" v-model.trim="formData.name" validation="required|length:3,30" :disabled="isLoading" />
            <button type="submit" class="btn btn-primary" :class="{ loading: isLoading}">
                Create
                <IconArrowRight v-if="!isLoading" class="h-5 w-5" />
            </button>
        </FormKit>
    </div>
</template>
<script lang="ts" setup>
import { reset } from '@formkit/vue';
import { defineAsyncComponent, ref } from 'vue';

const IconArrowRight = defineAsyncComponent(() => import('../components/IconArrowRight.vue'))

withDefaults(defineProps<{
    isLoading?: boolean
}>(), {
    isLoading: false
})

const emit = defineEmits<{
    (e: 'submit', data: typeof formData.value): void
}>()

const formData = ref({
    name: ''
})

const resetForm = () => {
    reset('form-character-new')
}

const onSubmit = () => {
    emit('submit', formData.value)
}

defineExpose({ resetForm })
</script>