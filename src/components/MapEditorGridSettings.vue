<template>
    <div>
        <h3 class="text-lg font-bold pb-2 flex items-center gap-2">
            <div>Game Settings</div>
            <button v-if="!isEditingGameSettings" @click.prevent="editGameSettings" class="btn btn-xs">Edit</button>
        </h3>
        <div v-if="!isEditingGameSettings" class="grid gap-2">
            <div>- Teams: <span class="font-bold">{{ map?.settings.teams }}</span></div>
            <div>- Score To Win: <span class="font-bold">{{ map?.settings.scoreToWin }}</span></div>
            <div>- Time Limit: <span class="font-bold">{{ timeLimitMinutesAndSeconds?.minutes }} Minutes<span
                        v-if="timeLimitMinutesAndSeconds?.seconds"> &
                        {{ timeLimitMinutesAndSeconds?.seconds }}
                        Seconds</span></span>
            </div>
            <div>- Daytime: <span class="font-bold">{{ map?.settings.daytime }}</span></div>
        </div>
        <div v-if="isEditingGameSettings" class="grid gap-4">
            <div class="grid gap-2 w-full">
                <div class="flex gap-1 items-center">
                    <div>- Teams: {{ editGameSettingsFormData.settings.teams }}</div>
                    <button type="button" class="btn btn-square btn-xs" @click="editGameSettingsFormData.settings.teams--"
                        :disabled="editGameSettingsFormData.settings.teams <= 1 || isSavingGameSettings">-</button>
                    <button type="button" class="btn btn-square btn-xs" @click="editGameSettingsFormData.settings.teams++"
                        :disabled="isSavingGameSettings">+</button>
                </div>
                <div class="flex gap-1 items-center">
                    <div>- Score To Win:</div>
                    <input type="number" class="input input-bordered input-xs"
                        v-model="editGameSettingsFormData.settings.scoreToWin"
                        :disabled="isSavingGameSettings" />
                </div>
                <div class="flex gap-1 items-center">
                    <div>- Time Limit:</div>
                    <input type="number" class="input input-bordered input-xs"
                        v-model="editGameSettingsFormData.settings.timeLimitInSeconds"
                        :disabled="isSavingGameSettings" />
                </div>
                <div class="flex gap-1 items-center">
                    <div>- Daytime:</div>
                    <select class="select select-bordered select-xs"
                        v-model="editGameSettingsFormData.settings.daytime"
                        :disabled="isSavingGameSettings">
                        <option v-for="option in optionSelectDaytime" :key="option" :value="option">{{ option }}</option>
                    </select>
                </div>
            </div>
            <div class="flex gap-2">
                <button v-if="isEditingGameSettings" @click.prevent="saveEditGameSettings" class="btn btn-xs btn-primary"
                    :class="{ loading: isSavingGameSettings }">Save</button>
                <button v-if="isEditingGameSettings" @click.prevent="closeEditGameSettings" class="btn btn-xs btn-outline"
                    :disabled="isSavingGameSettings">Cancel</button>
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
    </div>
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

const optionSelectDaytime = ref<Daytime[]>([
    Daytime.Morning,
    Daytime.Afternoon,
    Daytime.Dawn,
    Daytime.Night
])

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