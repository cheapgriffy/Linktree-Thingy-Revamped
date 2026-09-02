<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'

const props = defineProps({

    title: {
        type: String,
        default: 'Section'
    },
    // can be used to overide the default state
    modelValue: {
        type: Boolean,
        default: false
    },

    // Uncontrolled mode: same idea, but used as a static initial open state
    open: {
        type: Boolean,
        default: false
    },

    // in ms
    duration: {
        type: Number,
        default: 300
    },

    // title class
    summaryClass: {
        type: String,
        default: ''
    },
    contentClass: {
        type: String,
        default: ''
    },
    wrapperClass: {
        type: String,
        default: ''
    },
    iconClass: {
        type: String,
        default: ''
    }
})

// We emit two events so the parent can react to changes.
// - toggle: tells the parent whether the component is open or closed
// - update:modelValue: works with v-model in Vue 3
const emit = defineEmits(['toggle', 'update:modelValue'])

// Tracks the open state of the accordion
const isOpen = ref(props.modelValue || props.open)

// Reference to the content wrapper, so we can measure its real height
const contentRef = ref(null)

// stated here to prevent rerender when size change
const panelHeight = ref('0px')

const updateHeight = () => {
    if (!contentRef.value) {
        panelHeight.value = '0px'
        return
    }

    const height = contentRef.value.scrollHeight
    panelHeight.value = isOpen.value ? `${height}px` : '0px'
}

// Toggle the internal open/closed state and notify the parent.
const toggle = () => {
    isOpen.value = !isOpen.value
    updateHeight()
    emit('toggle', isOpen.value)
    emit('update:modelValue', isOpen.value)
}

// Sync the component when the parent changes the v-model value.
watch(
    () => props.modelValue,
    (value) => {
        isOpen.value = Boolean(value)
        nextTick(updateHeight)
    },
    { immediate: true }
)

// Sync when the parent passes the static open prop.
watch(
    () => props.open,
    (value) => {
        isOpen.value = Boolean(value)
        nextTick(updateHeight)
    },
    { immediate: true }
)

// After mount, measure the content once and keep it updated if the size changes.
onMounted(() => {
    nextTick(updateHeight)

    if (typeof ResizeObserver !== 'undefined' && contentRef.value) {
        const observer = new ResizeObserver(() => updateHeight())
        observer.observe(contentRef.value)

        // Also watch scrollHeight updates so content changes are reflected.
        watch(
            () => contentRef.value?.scrollHeight,
            () => updateHeight(),
            { flush: 'post' }
        )
    }
})
</script>

<template>
    <div :class="['w-full', wrapperClass]">
        <button type="button"
            class="flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-left text-xl transition-colors duration-200 hover:bg-[#3a2a2a]/60"
            :class="summaryClass" @click="toggle">
            <span class="text-2xl leading-none transition-transform duration-300" :class="[
                iconClass,
                { 'rotate-90': isOpen }
            ]">
                ▸
            </span>
            <span class="select-none font-medium">{{ title }}</span>
        </button>

        <div class="overflow-hidden transition-all ease-out" :style="{
            // maxHeight controls the animated height.
            // When open, it is set to the full content height.
            maxHeight: panelHeight,
            transitionDuration: `${duration}ms`
        }">
            <div ref="contentRef" :class="['px-4 pb-4 pt-3 flex', contentClass]">
                <!-- content betweem the tags -->
                 <span class="bg-[#c1b9a5]/30 min-w-1 rounded-r-2xl mx-3"></span>
                <slot />
            </div>
        </div>
    </div>
</template>
