<template>
    <div class="grid gap-1 mb-5">
        <div class="font-bold text-sm">Attributes</div>
        <div>Remainging Points: <span class="font-bold">{{ pointsRemaining }}</span></div>
        <AttributeSpenderBar
            v-for="(attribute, index) in formAttributes"
            :label="attribute.label"
            :value="attribute.value"
            :max="pointsToSpend"
            @add="onAdd(index)"
            @subtract="onSubtract(index)"
            :disabledAdd="!pointsRemaining"
        />
    </div>
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';

const AttributeSpenderBar = defineAsyncComponent(() => import('../components/AttributeSpenderBar.vue'))

const props = withDefaults(defineProps<{
    pointsToSpend?: number,
    attributes?: {
        label: string,
        value: number
    }[]
}>(),{
    pointsToSpend: 15,
    attributes: () => {
        return [
            {
                label: 'Max Shield',
                value: 3
            },
            {
                label: 'Max Health',
                value: 12
            }
        ]
    }
})

const emit = defineEmits<{
    (e: 'update:attributes', attributes: typeof props.attributes): void,
}>()

const formAttributes = ref(props.attributes)

const pointsRemaining = computed(() => {
    const sumPointsSpent = formAttributes.value.reduce((partialSum, attribute) => partialSum + attribute.value, 0)
    return props.pointsToSpend - sumPointsSpent
})

const onAdd = (index: number) => {
    formAttributes.value[index].value++
    emit('update:attributes', formAttributes.value)
}

const onSubtract = (index: number) => {
    formAttributes.value[index].value--
    emit('update:attributes', formAttributes.value)
}
</script>