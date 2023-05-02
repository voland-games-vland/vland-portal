<template>
    <FormKit type="form" :actions="false" @submit="$emit('submit')">
        <FormKit
            :disabled="isSaving"
            type="text"
            name="name"
            label="Name"
            v-model.trim="formData.name"
            validation="required|length:3,30"
        />
        <FormKit
            :disabled="isSaving"
            type="select"
            label="Weapon Type"
            placeholder="Select a Weapon Type"
            name="weaponType"
            v-model="formData.weaponType"
            :options="weaponTypeOptions"
            validation="required"
        />
        <div class="flex gap-2">
            <button type="button" :disabled="isSaving" class="btn btn-error btn-outline" @click="$emit('delete')">
                Delete
            </button>
            <button type="submit" class="btn btn-primary" :class="{ loading: isSaving}">
                Save
            </button>
        </div>
    </FormKit>
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';
import { Weapon } from '../apis/vland.api';
import { FormKit } from '@formkit/vue';

const props = withDefaults(defineProps<{
    data?: {
        name: string,
        weaponType: Weapon
    },
    isSaving?: boolean
}>(),{
    data: () => {
        return {
            name: '',
            weaponType: Weapon.Sword
        }
    },
    isSaving: false
})

const weaponTypeOptions = ref<Weapon[]>([
    Weapon.Sword,
    Weapon.Bow,
    Weapon.Daggers,
    Weapon.Hammer,
    Weapon.Spear,
    Weapon.Pistols,
    Weapon.Sniper
])

const emit = defineEmits<{
    (e: 'update:data', data: typeof props.data): void,
    (e: 'submit'): void,
    (e: 'delete'): void
}>()

const formData = computed({
    get: () => props.data,
    set: (value) => emit('update:data', value)
})
</script>