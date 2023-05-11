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
            label="Gender"
            placeholder="Select a Gender"
            name="gender"
            v-model="formData.look.gender"
            :options="optionsGender"
            validation="required"
        />
        <FormKit
            :disabled="isSaving"
            type="select"
            label="Skin"
            placeholder="Select a Skin"
            name="skin"
            v-model="formData.look.skin"
            :options="optionsSkin"
            validation="required"
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
        <div>
            <AttributeSpender :pointsToSpend="15" v-model:attributes="formData.attributes" :disabled="isSaving" />
        </div>
        <div class="flex gap-2">
            <button type="submit" class="btn btn-primary" :class="{ loading: isSaving}">
                Save
            </button>
            <button type="button" class="btn btn-outline" :disabled="isSaving" @click="$emit('reset')">
                Reset
            </button>
            <ButtonDelete :disabled="isSaving" @delete="$emit('delete')">Delete</ButtonDelete>
        </div>
    </FormKit>
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';
import { CharacterPatchDto, Gender, Skin, Weapon } from '../apis/vland.api';
import { FormKit } from '@formkit/vue';

const ButtonDelete = defineAsyncComponent(() => import('../components/ButtonDelete.vue'))
const AttributeSpender = defineAsyncComponent(() => import('../components/AttributeSpender.vue'))

const props = withDefaults(defineProps<{
    data?: Required<CharacterPatchDto>,
    isSaving?: boolean
}>(),{
    data: () => {
        return {
            name: '',
            weaponType: Weapon.Sword,
            attributes: {
                attackDamage: 0,
                maxHealth: 0,
                maxShield: 0,
                moveSpeed: 0
            },
            look: {
                gender: Gender.Female,
                skin: Skin.Ninja
            }
        }
    },
    isSaving: false
})

const optionsGender = ref<Gender[]>([
    Gender.Female,
    Gender.Male
])

const optionsSkin = ref<Skin[]>([
    Skin.Ninja,
    Skin.Warrior,
    Skin.Orc,
    Skin.Mummy,
    Skin.Skeleton
])

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
    (e: 'delete'): void,
    (e: 'reset'): void
}>()

const formData = computed<Required<CharacterPatchDto>>({
    get: () => props.data,
    set: (value) => emit('update:data', value)
})
</script>