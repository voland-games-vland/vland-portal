<template>
    <h3 class="text-lg font-bold pb-2">Game Settings</h3>
    <div>- Teams: {{ map?.settings.teams }}</div>
    <div>- Score To Win: {{ map?.settings.scoreToWin }}</div>
    <div>- Time Limit: {{ timeLimitMinutesAndSeconds?.minutes }} Minutes<span
            v-if="timeLimitMinutesAndSeconds?.seconds"> & {{ timeLimitMinutesAndSeconds?.seconds }}
            Seconds</span></div>
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
import { computed, defineAsyncComponent } from 'vue';
import { useMapEditGridStore } from '../stores/mapEditGrid.store';
import { useDateFormat } from '@vueuse/core';

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
</script>