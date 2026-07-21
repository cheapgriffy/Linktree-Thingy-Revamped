<script setup>

import LinkButton from '../components/LinkButton.vue'
import TextBox from '../components/TextBox.vue'
import ProfilePicture from '../components/ProfilePicture.vue'

import { links_list, personal_phrases, username } from '../scripts/settings'

import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
    isLoaded.value = true
})

</script>

<template class="transition-all">
    <div class="flex flex-col justify-center items-center gap-5 pt-8 apply-at-display">
        <!-- Header -->
        <div class="my-10 flex flex-col justify-center items-center gap-5">
            <ProfilePicture />
            <TextBox :phrases="personal_phrases" :username="username" sleepTime=50 />
        </div>

        <!-- Links -->
        <template v-for="(item, index) in links_list" :key="item.title">
            <LinkButton :link_obj="links_list[index]" class="start appear-at-display" :style="{animationDelay: `${index * 0.1}s`}" />
        </template>
    </div>
</template>

<style>
.appear-at-display{
    animation: fade-in 0.5s ease-in-out forwards;
}
.start{
    opacity: 0;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>