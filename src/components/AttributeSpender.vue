<template>
    <div class="grid gap-1 mb-5">
        <div class="font-bold text-sm">Attributes</div>
        <div>Remainging Points: <span class="font-bold">{{ pointsRemaining }}</span></div>
        <AttributeSpenderBar
            v-for="(attribute, key) in formAttributes"
            :label="(key as string)"
            :value="attribute"
            :max="pointsToSpend"
            @add="onAdd(key as string)"
            @subtract="onSubtract(key as string)"
            :disabledAdd="!pointsRemaining"
            :key="key"
        />
    </div>
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';

const AttributeSpenderBar = defineAsyncComponent(() => import('../components/AttributeSpenderBar.vue'))

const props = withDefaults(defineProps<{
    pointsToSpend?: number,
    attributes?: {
        [key: string]: number
    }
}>(),{
    pointsToSpend: 15,
    attributes: () => {
        return {
            maxHealth: 4,
            maxShield: 3,
            attackDamage: 2,
            moveSpeed: 1
        }
    }
})

const emit = defineEmits<{
    (e: 'update:attributes', attributes: typeof props.attributes): void,
}>()

const formAttributes = ref(props.attributes)

const attributesAsArray = computed(() => {
    const array = Object.keys(formAttributes.value).map((key) => {
        return {
            key: key,
            value: formAttributes.value[key]
        }
    })
    return array
})

const pointsRemaining = computed(() => {
    const sumPointsSpent = attributesAsArray.value.reduce((partialSum, attribute) => partialSum + attribute.value, 0)
    return props.pointsToSpend - sumPointsSpent
})

const onAdd = (key: string) => {
    console.log('on add', key)
    formAttributes.value[key]++
    emit('update:attributes', formAttributes.value)
}

const onSubtract = (key: string) => {
    formAttributes.value[key]--
    emit('update:attributes', formAttributes.value)
}
</script>