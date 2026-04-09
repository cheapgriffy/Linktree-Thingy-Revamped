<script setup>
defineProps({
  title: {type: String, default: "Empty"},
  isActive: Boolean,
})


</script>

<template>
    <button v-if="isActive" class="z-1 link-btn responsive-text bg-[#1f1f1f] text-white rounded-2xl">{{ title }}</button>
</template>

<style>
.responsive-text{
    font-size: clamp(1rem, 1.5rem + 0.5vw, 1.7rem);
    padding: 0.50rem clamp(1.5rem, 3vw, 3rem);
    width: clamp(300px, 50%, 400px);
}
.link-btn {
    text-shadow: 13px;
    border: solid #424242 2px;
    box-shadow: 5px 3px 3px #1f1f1f46;

    transition: 0.2s all ease-out;
}
.link-btn:hover{
    transition: 0.2s all ease-out;
    transform: scale(1.05);
    background-color: #424242;
    border: solid #70a0f8 2px;
}
</style>