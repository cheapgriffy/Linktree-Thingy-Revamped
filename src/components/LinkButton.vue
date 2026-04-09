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
            class="relative link-btn responsive-text bg-[#1f1f1f] text-white rounded-2xl flex justify-center items-center">
            <img 
                v-if="link_obj.icon_url" 
                :src="link_obj.icon_url" 
                class="w-10 h-10 absolute left-3"> 
            <span 
                class="text-center grow">
                {{ link_obj.title }}
            </span>
        </button>
    </a>
</template>

<style>
.responsive-text {
    font-size: clamp(1rem, 1.5rem + 0.5vw, 1.7rem);
    padding: 0.50rem 0.50rem;
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