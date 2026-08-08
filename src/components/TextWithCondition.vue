<script setup>

const props = defineProps({
    correct: {
        type: Boolean,
        default: true,
    },
    content: {
        type: String,
        default: "God take away wifes and dogs, but sometimes, just sometime I do",
        // this time i wont forget one without content
    }
})

const svg_links = {
    cross: "/assets/icons/cross.svg",
    check: "/assets/icons/check.svg"
}

let img_src = props.correct ? svg_links.check : svg_links.cross

</script>

<template>
    <p>
        <img :src="img_src" :alt="props.correct ? 'check' : 'cross'" class="w-5 h-5 inline-block mr-2">
        <span >{{ props.content }}</span>
    </p>
</template>