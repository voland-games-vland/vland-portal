<template>
    <h3 class="text-lg font-bold pb-2 flex items-center gap-2">
        <div>Game Settings</div>
        <button v-if="!isEditingGameSettings" @click.prevent="editGameSettings" class="btn btn-xs">Edit</button>
    </h3>
    <div v-if="!isEditingGameSettings">
        <div>- Teams: {{ map?.settings.teams }}</div>
        <div>- Score To Win: {{ map?.settings.scoreToWin }}</div>
        <div>- Time Limit: {{ timeLimitMinutesAndSeconds?.minutes }} Minutes<span v-if="timeLimitMinutesAndSeconds?.seconds"> &
                {{ timeLimitMinutesAndSeconds?.seconds }}
                Seconds</span>
        </div>
        <div>- Daytime: {{ map?.settings.daytime }}</div>
    </div>
    <div v-if="isEditingGameSettings">
        <div>Edit</div>
        
        <div class="flex gap-2">
            <button v-if="isEditingGameSettings" @click.prevent="saveEditGameSettings" class="btn btn-xs btn-primary" :class="{ loading: isSavingGameSettings}">Save</button>
            <button v-if="isEditingGameSettings" @click.prevent="closeEditGameSettings" class="btn btn-xs btn-outline" :disabled="isSavingGameSettings">Cancel</button>
        </div>
    </div>
    <br />
    <h3 class="text-lg font-bold pb-2">Editor Settings</h3>
    <div class="flex align-middle gap-2">
        <input type="checkbox" v-model="mapEditGridStore.showCoordinates" class="checkbox" />
        <div>Show Coordinates</div>
    </div>
    <br />
    <div>
        <ButtonDeleteMap :mapId="mapEditGridStore.mapId" />
    </div>
    <br />
    <div class="font-bold text-sm">Created At: {{ useDateFormat(map?.createdAt, 'DD.MM.YYYY').value }}</div>
    <div class="font-bold text-sm">Updated At: {{ useDateFormat(map?.updatedAt, 'DD.MM.YYYY').value }}</div>
</template>
<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from 'vue';
import { useMapEditGridStore } from '../stores/mapEditGrid.store';
import { useDateFormat } from '@vueuse/core';
import { Daytime } from '../apis/vland.api';

const ButtonDeleteMap = defineAsyncComponent(() => import('../components/ButtonDeleteMap.vue'))

const mapEditGridStore = useMapEditGridStore()

const map = computed(() => mapEditGridStore.map)

const timeLimitMinutesAndSeconds = computed(() => {
    if (!map.value?.settings.timeLimitInSeconds) return
    const seconds = map.value?.settings.timeLimitInSeconds
    const minutes = Math.floor(seconds / 60)
    return {
        minutes: minutes,
        seconds: seconds - (minutes * 60)
    }
})

const editGameSettingsFormData = ref({
    settings: {
        daytime: Daytime.Morning,
        scoreToWin: 1000,
        teams: 2,
        timeLimitInSeconds: 300
    }
})

const isEditingGameSettings = ref(false)

const isSavingGameSettings = ref(false)

const closeEditGameSettings = () => {
    isEditingGameSettings.value = false
}

const saveEditGameSettings = async () => {
    isSavingGameSettings.value = true
    await mapEditGridStore.updateMap(editGameSettingsFormData.value)
    isSavingGameSettings.value = false
    closeEditGameSettings()
}

const editGameSettings = () => {
    if (!map.value) return

    editGameSettingsFormData.value.settings.daytime = map.value?.settings.daytime
    editGameSettingsFormData.value.settings.scoreToWin = map.value?.settings.scoreToWin
    editGameSettingsFormData.value.settings.teams = map.value?.settings.teams
    editGameSettingsFormData.value.settings.timeLimitInSeconds = map.value?.settings.timeLimitInSeconds
    isEditingGameSettings.value = true
}
</script>