<template>
    <div class="p-4 grid gap-4">
        <NavigationBack toBack="/characters">Characters_Edit</NavigationBack>
        <div class="grid w-full max-w-xs mx-auto" v-if="!isPageLoading">
            <FormCharacterEdit v-model:data="formData" @delete="onDelete" @submit="onSubmit" @reset="onReset" :isSaving="isSaving" />
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
import vlandApi, { Character, CharacterPatchDto, Gender, Skin, Weapon } from '../apis/vland.api';
import { useCharactersStore } from '../stores/characters.store';
import { useRouter } from 'vue-router';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
const FormCharacterEdit = defineAsyncComponent(() => import('../components/FormCharacterEdit.vue'))
const SpinnerRound = defineAsyncComponent(() => import('../components/SpinnerRound.vue'))

const router = useRouter()
const charactersStore = useCharactersStore()

const characterId = useRouteParams<string>('id')
const character = ref<Character | null>(null)
const isPageLoading = ref(true)

const isSaving = ref(false)

const formData = ref<Required<CharacterPatchDto>>({
    name: '',
    weaponType: Weapon.Sword,
    attributes: {
        attackDamage: 0,
        maxHealth: 0,
        maxShield: 0,
        moveSpeed: 0
    },
    look: {
        gender: Gender.Female,
        skin: Skin.Ninja
    }
})

const loadCharacter = async () => {
    isPageLoading.value = true
    const response = await vlandApi.characters.id.get(characterId.value)
    character.value = response
    formData.value.name = response.name
    formData.value.weaponType = response.weaponType as Weapon
    formData.value.attributes = {...response.attributes}
    formData.value.look = {...response.look}
    isPageLoading.value = false
}

const onSubmit = async () => {
    isSaving.value = true
    const response = await charactersStore.updateCharacter(characterId.value, formData.value)
    if (!response) return
    character.value = response
    isSaving.value = false
}

const onReset = async () => {
    if (!character.value) return
    formData.value.name = character.value?.name
    formData.value.weaponType = character.value?.weaponType
    formData.value.attributes.maxHealth = character.value.attributes.maxHealth
    formData.value.attributes.maxShield = character.value.attributes.maxShield
    formData.value.attributes.attackDamage = character.value.attributes.attackDamage
    formData.value.attributes.moveSpeed = character.value.attributes.moveSpeed
    formData.value.look.gender = character.value.look.gender
    formData.value.look.skin = character.value.look.skin
}

const onDelete = async () => {
    await charactersStore.deleteCharacter(characterId.value)
    router.push('/characters')
}

loadCharacter()
</script>