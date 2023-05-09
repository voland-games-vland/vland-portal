<template>
    <div class="stats stats-vertical lg:stats-horizontal shadow">
        <div class="stat">
            <div class="stat-title">Characters</div>
            <div class="stat-value">{{ charactersMyStore.characters?.length || '...' }}</div>
            <div class="stat-desc"></div>
        </div>

        <div class="stat">
            <div class="stat-title">Maps</div>
            <div class="stat-value">{{ myMapsStore.maps?.length || '...'}}</div>
            <div class="stat-desc"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCharactersMyStore } from '../stores/charactersMy.store';
import { useMyMapsStore } from '../stores/myMaps.store';


const charactersMyStore = useCharactersMyStore()
const myMapsStore = useMyMapsStore()

charactersMyStore.loadMyCharacters()
myMapsStore.loadMyMaps()
</script>