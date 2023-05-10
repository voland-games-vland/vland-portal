<template>
<button class="btn btn-xs font-bold text-sm bg-neutral text-neutral-content rounded-btn pointer-events-auto normal-case" :disabled="isLoading" @click="isModalCharacterNewOpen = true">
    <span v-if="isLoading">Loading...</span>
    <span v-if="!isLoading">{{ name }}</span>
    <teleport to="body">
            <input type="checkbox" id="modal-character-new" class="modal-toggle" v-model="isModalCharacterNewOpen" />
            <label for="modal-character-new" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <label for="modal-character-new" class="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                    <div class="grid gap-2">
                        <h2 class="font-bold text-2xl">Edit Map Name</h2>
                        <FormKit type="form" :actions="false" @submit="onSubmit">
                            <FormKit type="text" name="name" label="Name" v-model.trim="formData.name" validation="required|length:3,30" :disabled="isLoading" />
                            <div class="flex gap-2">
                                <button type="submit" class="btn btn-primary" :class="{ loading: isSaving}">
                                    Save
                                </button>
                                <button type="button" class="btn btn-outline" :disabled="isSaving" @click="onReset">
                                    Reset
                                </button>
                            </div>
                        </FormKit>
                    </div>
                </label>
            </label>
        </teleport>
</button>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useMapEditGridStore } from '../stores/mapEditGrid.store';

const mapEditGridStore = useMapEditGridStore()

const props = defineProps<{
    isLoading?: boolean,
    name?: string
}>()

const isModalCharacterNewOpen = ref(false)
const isSaving = ref(false)

const formData = ref({
    name: props.name || ''
})

const onReset = () => {
    formData.value.name = props.name || ''
}

const onSubmit = async () => {
    isSaving.value = true
    await mapEditGridStore.updateMap({ 
        name: formData.value.name
    })
    isSaving.value = false
    isModalCharacterNewOpen.value = false
}
</script>