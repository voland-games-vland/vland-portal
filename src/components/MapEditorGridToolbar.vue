<template>
    <div class="flex gap-1 bg-slate-800 p-1 rounded-btn h-fit">
        <div class="btn btn-sm btn-square relative"
            @click="mapEditorToolbarStore.selectedTool = Tools.Select" 
            :class="{
                'btn-active': mapEditorToolbarStore.selectedTool == Tools.Select,
                'btn-primary': mapEditorToolbarStore.selectedTool == Tools.Select
            }"
        >

            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="12"
                height="12" id="Capa_1" x="0px" y="0px" viewBox="0 0 297 297" style="enable-background:new 0 0 297 297;"
                xml:space="preserve" fill="currentColor">
                <path
                    d="M293.808,239.59l-82.841-82.878l60.437-34.929c3.54-2.047,5.601-5.936,5.306-10.015c-0.295-4.08-2.894-7.632-6.692-9.146  L14.699,0.762C10.734-0.821,6.212,0.109,3.193,3.127c-3.018,3.017-3.948,7.541-2.368,11.504l101.813,255.434  c1.515,3.801,5.066,6.401,9.147,6.696c4.081,0.301,7.972-1.766,10.017-5.309l34.904-60.449l82.835,82.868  c2.002,2.004,4.719,3.129,7.551,3.129c2.833,0,5.55-1.126,7.553-3.129l39.162-39.186  C297.976,250.516,297.976,243.758,293.808,239.59z" />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
            <div class="absolute bottom-0 right-[3px] text-[7px]">1</div>
        </div>
        <div class="btn btn-sm btn-square relative"
            @click="mapEditorToolbarStore.selectedTool = Tools.Block" 
            :class="{
                'btn-active': mapEditorToolbarStore.selectedTool == Tools.Block,
                'btn-primary': mapEditorToolbarStore.selectedTool == Tools.Block
            }"
        >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                id="Layer_1" x="0px" y="0px" viewBox="0 0 100.75 100.75" width="18" height="18"
                style="enable-background:new 0 0 100.75 100.75;" xml:space="preserve" fill="currentColor">
                <path
                    d="M86.516,62.917l-12.621-8.294c-0.689-0.453-1.622-0.263-2.078,0.43c-0.455,0.692-0.262,1.623,0.43,2.077l10.433,6.856  L38.929,79.524L7.724,58.878l17.839-6.492c0.778-0.283,1.181-1.144,0.896-1.923c-0.283-0.778-1.145-1.181-1.922-0.896l-20.66,7.519  c-0.754,0.274-1.15,1.091-0.915,1.85v8.914c0,0.175,0.036,0.34,0.091,0.496c0.01,0.475,0.244,0.937,0.67,1.219l34.174,22.61  c0.255,0.168,0.543,0.249,0.827,0.249c0.297,0,0.584-0.098,0.834-0.265l47.073-16.717c0.554-0.197,0.915-0.688,0.981-1.235  c0.083-0.186,0.131-0.391,0.131-0.608V64.39C87.742,63.655,87.213,63.046,86.516,62.917z M5.962,61.31l31.263,20.684v6.139  L5.962,67.449V61.31z M40.225,82.247l44.518-15.81v6.491l-44.518,15.81V82.247z" />
                <path
                    d="M97.11,31.695c0-0.734-0.528-1.343-1.225-1.472L62.051,7.826c-0.027-0.018-0.057-0.028-0.084-0.044  c-0.046-0.026-0.091-0.052-0.14-0.073c-0.046-0.02-0.092-0.036-0.138-0.051c-0.045-0.015-0.089-0.029-0.135-0.039  c-0.05-0.011-0.1-0.018-0.151-0.024c-0.045-0.005-0.09-0.011-0.136-0.012c-0.052-0.001-0.103,0.002-0.155,0.006  c-0.045,0.003-0.09,0.007-0.136,0.014c-0.053,0.009-0.105,0.023-0.157,0.038c-0.031,0.009-0.062,0.012-0.093,0.022L13.258,24.372  c-0.767,0.27-1.173,1.1-0.928,1.869v8.902c0,0.17,0.034,0.331,0.087,0.483c0.007,0.479,0.242,0.947,0.671,1.231l34.168,22.618  c0.255,0.168,0.542,0.249,0.827,0.249c0.298,0,0.586-0.098,0.836-0.267l47.074-16.708c0.552-0.196,0.911-0.683,0.98-1.227  c0.086-0.189,0.137-0.398,0.137-0.619V31.695z M61.018,10.74l31.039,20.547L48.288,46.821l-31.165-20.63L61.018,10.74z   M15.33,28.602l31.254,20.689v6.14L15.33,34.742V28.602z M49.584,49.544L94.11,33.741v6.491L49.584,56.036V49.544z" />
            </svg>
            <div class="absolute bottom-0 right-[3px] text-[7px]">2</div>
        </div>
        <div class="btn btn-sm btn-square relative"
            @click="mapEditorToolbarStore.selectedTool = Tools.Object" 
            :class="{
                'btn-active': mapEditorToolbarStore.selectedTool == Tools.Object,
                'btn-primary': mapEditorToolbarStore.selectedTool == Tools.Object
            }"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18" fill="currentColor">
                <g id="Layer_4" data-name="Layer 4">
                    <path
                        d="M57.74,17.94A1.51,1.51,0,0,0,57,16.7L32.75,2.7a1.49,1.49,0,0,0-1.5,0L7,16.7A1.58,1.58,0,0,0,6.25,18V46A1.51,1.51,0,0,0,7,47.3l24.25,14a1.54,1.54,0,0,0,1.5,0L57,47.3a1.51,1.51,0,0,0,.75-1.3C57.74,45.94,57.76,18,57.74,17.94ZM32,5.73,53.25,18,32,30.27,10.75,18ZM9.25,20.6,30.5,32.87V57.4L9.25,45.13ZM33.5,57.4V32.87L54.75,20.6V45.13Z" />
                </g>
            </svg>
            <div class="absolute bottom-0 right-[3px] text-[7px]">3</div>
        </div>
        <div class="btn btn-sm btn-square relative"
            @click="mapEditorToolbarStore.selectedTool = Tools.Eraser" 
            :class="{
                'btn-active': mapEditorToolbarStore.selectedTool == Tools.Eraser,
                'btn-primary': mapEditorToolbarStore.selectedTool == Tools.Eraser
            }"
        >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" fill="none" stroke="currentColor" version="1.1" id="Icons" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
                <path class="st0" d="M28,12.5c0.8-0.8,0.8-2,0-2.8L22.4,4c-0.8-0.8-2-0.8-2.8,0L5,18.5c-0.8,0.8-0.8,2,0,2.8l3.8,3.8h6.6L28,12.5z"/>
                <line class="st0" x1="12.5" y1="11.1" x2="20.9" y2="19.5"/>
                <line class="st0" x1="5" y1="29" x2="24" y2="29"/>
            </svg>
            <div class="absolute bottom-0 right-[3px] text-[7px]">0</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onKeyStroke } from '@vueuse/core';
import { Tools, useMapEditorToolbarStore } from '../stores/mapEditorToolbar.store';

const mapEditorToolbarStore = useMapEditorToolbarStore()

onKeyStroke('1', (e) => {
  if (mapEditorToolbarStore.selectedTool == Tools.Select) return
  mapEditorToolbarStore.selectedTool = Tools.Select
})
onKeyStroke('2', (e) => {
  if (mapEditorToolbarStore.selectedTool == Tools.Block) return
  mapEditorToolbarStore.selectedTool = Tools.Block
})

onKeyStroke('3', (e) => {
  if (mapEditorToolbarStore.selectedTool == Tools.Object) return
  mapEditorToolbarStore.selectedTool = Tools.Object
})
onKeyStroke('0', (e) => {
  if (mapEditorToolbarStore.selectedTool == Tools.Eraser) return
  mapEditorToolbarStore.selectedTool = Tools.Eraser
})
</script>