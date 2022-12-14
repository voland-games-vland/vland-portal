<template>
    <div class="flex text-xl gap-2">
        <router-link :to="toBack" class="flex justify-center align-middle group cursor-pointer gap-1">
            <div class="grid justify-center text-base-content group-hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64" fill="currentColor"><g id="Layer_32" data-name="Layer 32"><path d="M58.1,4.32a1.51,1.51,0,0,0-1.55.09L17.94,30.76a1.51,1.51,0,0,0,0,2.48L56.55,59.59a1.51,1.51,0,0,0,2.35-1.24V5.65A1.51,1.51,0,0,0,58.1,4.32ZM55.9,55.51,21.44,32,55.9,8.49Z"/><path d="M46.06,57.11,9.26,32,46.06,6.89a1.5,1.5,0,1,0-1.69-2.48L5.76,30.76a1.51,1.51,0,0,0,0,2.48L44.37,59.59A1.5,1.5,0,0,0,46.06,57.11Z"/></g></svg>
            </div>
            <div class="text-gray-400 group-hover:text-primary font-bold uppercase">Back</div>
        </router-link>
        <div class="font-light text-gray-400 tracking-[-0.35em] pr-2">//</div>
        <div class="text-base-content font-bold uppercase"><slot></slot></div>
    </div>
</template>
<script lang="ts" setup>
defineProps<{
    toBack: string
}>()
</script>