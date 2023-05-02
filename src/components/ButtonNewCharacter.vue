<template>
    <div>
        <label class="btn btn-ghost btn-sm" for="modal-character-new" @click="formCharacterNew?.resetForm">
            <IconPlus class="mr-2" width="12" height="12" />
            <span>New Character</span>
        </label>
        <teleport to="body">
            <input type="checkbox" id="modal-character-new" class="modal-toggle" v-model="isModalCharacterNewOpen" />
            <label for="modal-character-new" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <label for="modal-character-new" class="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                    <FormCharacterNew ref="formCharacterNew" @submit="onSubmitNewCharacter"
                        :isLoading="isLoadingSubmitNewCharcter" />
                </label>
            </label>
        </teleport>
    </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { useCharactersMyStore } from '../stores/charactersMy.store';
import { useCharactersStore } from '../stores/characters.store';

const IconPlus = defineAsyncComponent(() => import('../components/IconPlus.vue'))
const FormCharacterNew = defineAsyncComponent(() => import('../components/FormCharacterNew.vue'))

const charactersStore = useCharactersStore()
const charactersMyStore = useCharactersMyStore()

const formCharacterNew = ref<InstanceType<typeof FormCharacterNew> | null>(null);

const isModalCharacterNewOpen = ref(false)
const isLoadingSubmitNewCharcter = ref(false)
const onSubmitNewCharacter = async (data: { name: string }) => {
    try {
        isLoadingSubmitNewCharcter.value = true
        await charactersStore.createNewCharacter(data)
        await charactersMyStore.loadMyCharacters()
        formCharacterNew.value?.resetForm()
        isLoadingSubmitNewCharcter.value = false
        isModalCharacterNewOpen.value = false
    } catch {
        isLoadingSubmitNewCharcter.value = false
    }
}
</script>