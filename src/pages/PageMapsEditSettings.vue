<template>
    <div class="p-4">
        <NavigationBack toBack="/maps">Map Settings</NavigationBack>
        <div v-if="map">
            <br />
            <div class="font-bold text-sm">Map name</div>
            <div><span class="text-4xl font-bold">{{ map?.name }}</span> <span class="font-bold text-sm">{{ map.width
            }}x{{ map.height }}</span></div>
            <br />

            <div class="font-bold text-sm">Map Settings</div>
            <div class="font-bold">- Teams: {{ map.settings.teams }}</div>
            <div class="font-bold">- Score To Win: {{ map.settings.scoreToWin }}</div>
            <div class="font-bold">- Time Limit: {{ timeLimitMinutesAndSeconds?.minutes }} Minutes<span
                    v-if="timeLimitMinutesAndSeconds?.seconds"> & {{ timeLimitMinutesAndSeconds?.seconds }}
                    Seconds</span></div>
            <br />
            <div class="font-bold text-sm">Created At: {{ useDateFormat(map.createdAt, 'DD.MM.YYYY').value }}</div>
            <div class="font-bold text-sm">Updated At: {{ useDateFormat(map.updatedAt, 'DD.MM.YYYY').value }}</div>
            <br />
            <ButtonDeleteMap :mapId="mapId" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineAsyncComponent, onMounted, ref } from 'vue';
import { useRouteParams } from '@vueuse/router'
import vlandApi, { Map } from '../apis/vland.api';
import { useDateFormat } from '@vueuse/core';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))
const ButtonDeleteMap = defineAsyncComponent(() => import('../components/ButtonDeleteMap.vue'))

const mapId = useRouteParams<string>('id')

const map = ref<Map | undefined>()

const timeLimitMinutesAndSeconds = computed(() => {
    if (!map.value?.settings.timeLimitInSeconds) return
    const seconds = map.value?.settings.timeLimitInSeconds
    const minutes = Math.floor(seconds / 60)
    return {
        minutes: minutes,
        seconds: seconds - (minutes * 60)
    }
})

onMounted(async () => {
    map.value = await vlandApi.maps.id.get(mapId.value)
})
</script>