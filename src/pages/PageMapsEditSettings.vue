<template>
    <div class="p-4 grid gap-4">
        <NavigationBack toBack="/maps">Map Settings</NavigationBack>
        <div v-if="map">
            <div class="font-bold text-sm">Map name</div>
            <div><span class="text-4xl font-bold text-primary-focus">{{ map?.name }}</span> <span
                    class="font-bold text-sm">{{ map.width
                    }}x{{ map.height }}</span></div>
            <br />
            <div>
                <RouterLink :to="`/maps/edit/${mapId}/grid`" class="btn btn-lg"><svg xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" class="mr-2" width="14" height="14" viewBox="0 0 18 18"
                        version="1.1">
                        <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->
                        <title>edit</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Rounded" transform="translate(-579.000000, -2771.000000)">
                                <g id="Image" transform="translate(100.000000, 2626.000000)">
                                    <g id="-Round-/-Image-/-edit" transform="translate(476.000000, 142.000000)">
                                        <g transform="translate(0.000000, 0.000000)">
                                            <polygon id="Path" points="0 0 24 0 24 24 0 24" />
                                            <path
                                                d="M3,17.46 L3,20.5 C3,20.78 3.22,21 3.5,21 L6.54,21 C6.67,21 6.8,20.95 6.89,20.85 L17.81,9.94 L14.06,6.19 L3.15,17.1 C3.05,17.2 3,17.32 3,17.46 Z M20.71,7.04 C21.1,6.65 21.1,6.02 20.71,5.63 L18.37,3.29 C17.98,2.9 17.35,2.9 16.96,3.29 L15.13,5.12 L18.88,8.87 L20.71,7.04 Z"
                                                id="🔹-Icon-Color" fill="currentColor" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <span>Edit Grid</span>
                </RouterLink>
            </div>
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