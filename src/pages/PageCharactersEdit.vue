<template>
    <div class="p-4 grid gap-4">
        <NavigationBack toBack="/characters">Characters_Edit</NavigationBack>
        <div class="grid w-full max-w-xs mx-auto" v-if="!isPageLoading">
            <FormCharacterEdit v-model:data="formData" />
        </div>
        <div class="grid" v-if="isPageLoading">
            <div v-if="isPageLoading" class="text-center font-bold m-auto grid gap-2">
                <p>Loading Character Data</p>
                <SpinnerRound />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouteParams } from '@vueuse/router';
import { defineAsyncComponent, ref } from 'vue';
import vlandApi, { Character, Weapon } from '../apis/vland.api';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
const FormCharacterEdit = defineAsyncComponent(() => import('../components/FormCharacterEdit.vue'))
const SpinnerRound = defineAsyncComponent(() => import('../components/SpinnerRound.vue'))
const characterId = useRouteParams<string>('id')
const character = ref<Character | null>(null)
const isPageLoading = ref(true)

const formData = ref({
    name: '',
    weaponType: Weapon.Sword
})

const loadCharacter = async () => {
    isPageLoading.value = true
    const response = await vlandApi.characters.id.get(characterId.value)
    character.value = response
    formData.value.name = response.name
    formData.value.weaponType = response.weaponType as Weapon
    isPageLoading.value = false
}

loadCharacter()
</script>