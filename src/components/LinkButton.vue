<script setup>
// act as flags for components
defineProps({
    link_obj: Object,
})

</script>

<template>
    <a :href="link_obj.link" 
        target="blank"
        class="z-1"
        v-if="link_obj.active">
        <button  
            class="link-btn responsive-text bg-[#1f1f1f] text-white rounded-2xl">
            {{ link_obj.title }}
        </button>
    </a>
</template>

<style>
.responsive-text {
    font-size: clamp(1rem, 1.5rem + 0.5vw, 1.7rem);
    padding: 0.50rem clamp(1.5rem, 3vw, 3rem);
    width: clamp(300px, 350px + 2vw, 500px);
}

/* imported from old repo, TODO update to tailwind standards */
.link-btn {
    text-shadow: 13px;
    border: solid #424242 2px;
    box-shadow: 5px 3px 3px #1f1f1f46;

    transition: 0.2s all ease-out;
}

.link-btn:hover {
    transition: 0.2s all ease-out;
    transform: scale(1.05);
    background-color: #424242;
    border: solid #70a0f8 2px;
}
</style>