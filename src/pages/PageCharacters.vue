<template>
    <div class="p-4 grid gap-4">
        <NavigationBack toBack="/start">Characters</NavigationBack>
        <ButtonNewCharacter />
        <div class="grid grid-cols-[repeat(auto-fill,minmax(242px,1fr))] gap-4">
            <CharacterListItem
                v-for="character in charactersMyStore.characters"
                :key="character._id"
                :id="character._id"
                :name="character.name"
                :weaponType="character.weaponType"
            />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useCharactersMyStore } from '../stores/charactersMy.store';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
const ButtonNewCharacter = defineAsyncComponent(() => import('../components/ButtonNewCharacter.vue'))
const CharacterListItem = defineAsyncComponent(() => import('../components/CharacterListItem.vue'))

const charactersMyStore = useCharactersMyStore()

charactersMyStore.loadMyCharacters()
</script>