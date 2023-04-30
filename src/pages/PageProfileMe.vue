<template>
    <div class="p-4 grid gap-4">
        <NavigationBack toBack="/start">Me</NavigationBack>
        <div>
            <div class="flex flex-col gap-2 w-full max-w-xs">
                <label class="font-bold">Nickname</label>
                <input :disabled="!isUserLoaded" type="text" placeholder="..." v-model="nickname" class="input w-full" />
                <div v-if="isUserLoaded && isNicknameDirty" class="flex gap-2">
                    <button class="btn btn-square btn-primary" @click="onSubmitClick">
                        <IconCheckmark class="h-6 w-6"></IconCheckmark>
                    </button>
                    <button class="btn btn-square btn-outline" @click="onCancelClick">
                        <IconCancel class="h-6 w-6"></IconCancel>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineAsyncComponent, onMounted, ref } from 'vue';
import { useUserStore } from '../stores/user.store';

const NavigationBack = defineAsyncComponent(() => import('../components/NavigationBack.vue'))

const IconCheckmark = defineAsyncComponent(() => import('../components/IconCheckmark.vue'))
const IconCancel = defineAsyncComponent(() => import('../components/IconCancel.vue'))

const userStore = useUserStore()

const nickname = ref('')
const isNicknameDirty = computed(() => userStore.user?.nickname != nickname.value)
const isUserLoaded = computed(() => !!userStore.user)

const onCancelClick = () => {
    nickname.value = userStore.user?.nickname || ''
}

const onSubmitClick = () => {
    userStore.updateUserNickname(nickname.value)
}

onMounted(async () => {
    await userStore.loadUserId()
    nickname.value = userStore.user?.nickname || ''
})
</script>