<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
    timeZone: {
        type: String,
    },
    label: {
        type: String,
        default: 'Current time',
    },
    locale: {
        type: String,
        default: 'en-US',
    },
    hour12: {
        type: Boolean,
        default: false,
    },
})

const now = ref(new Date())
let intervalId = null

const timeFormatter = computed(() =>
    new Intl.DateTimeFormat(props.locale, {
        timeZone: props.timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: props.hour12,
    }),
)

const dateFormatter = computed(() =>
    new Intl.DateTimeFormat(props.locale, {
        timeZone: props.timeZone,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }),
)

const displayTime = computed(() => timeFormatter.value.format(now.value))
const displayDate = computed(() => dateFormatter.value.format(now.value))

const updateTime = () => {
    now.value = new Date()
}

onMounted(() => {
    updateTime()
    intervalId = setInterval(updateTime, 1000)
})

onBeforeUnmount(() => {
    if (intervalId) {
        clearInterval(intervalId)
    }
})
</script>

<template>
    <div class="">
        <p class="">
            {{ label }}
        </p>

        <div class="mt-3 text-xl font-bold sm:text-3xl">
            {{ displayTime }}
        </div>
    </div>
</template>
