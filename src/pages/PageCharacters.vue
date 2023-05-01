<template>
    <div class="p-4 grid gap-4">
        <NavigationBack toBack="/start">Characters</NavigationBack>
        <div>
            <button class="btn btn-ghost btn-sm">
                <IconPlus class="mr-2"  width="12" height="12" />
                <span>New Character</span>
            </button>
        </div>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(242px,1fr))] gap-4">
            <button v-for="character in charactersMyStore.characters" class="group grid gap-2 bg-slate-900 text-slate-300 hover:text-slate-50 p-4 text-center border-4 border-slate-700 hover:bg-slate-800 hover:border-slate-800 transition-all duration-300">
                <div class="font-bold text-xl truncate">{{ character.name }}</div>
                <div class="flex justify-center">
                    <div class="w-12 h-12 bg-slate-500 truncate text-xs font-bold flex items-center justify-center"><div class="rotate-45">{{ character.weaponType }}</div></div>
                </div>
            </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useCharactersMyStore } from '../stores/charactersMy.store';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
const IconPlus = defineAsyncComponent(() => import('../components/IconPlus.vue'))

const charactersMyStore = useCharactersMyStore()

charactersMyStore.loadMyCharacters()
</script>