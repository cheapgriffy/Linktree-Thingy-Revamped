<script setup>
import { useScroll } from '@vueuse/core'
import { computed, ref } from 'vue';

import { profiles, curr_profile_name, isNavHovered } from '../scripts/settings';
import { capitalize } from '../scripts/GlobalClasses';

const { arrivedState } = useScroll(window)



const disapear_onscroll = computed(() => {
    return {
        transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        transform: arrivedState.top ? 'translate(-50%, 0)' : 'translate(-50%, -150%)',
    }
})


</script>

<template>
    <div :style="disapear_onscroll" 
        class="fixed-x-center bg-[#424242]/50 border-2 border-[#1f1f1f46] rounded-full px-6 flex items-center justify-center gap-4 h-15"
        @mouseenter="isNavHovered = true" @mouseleave="isNavHovered = false">

        <!-- items is unused here but block if undef -->
        <template v-for="(items, name) in profiles" :key="name">
            <button 
                v-on:click="curr_profile_name = name"
                class="px-4 py-1 rounded-full transition-all duration-300 font-[Outfit] text-lg"
                :class="curr_profile_name === name ? 'bg-yellow-400 text-black scale-110 shadow-md' : 'text-white hover:bg-white/10'">
                
                {{ capitalize(name) }}

            </button>
        </template>

    </div>
</template>

<style>
.fixed-x-center {
	position: fixed;
	top: 1rem;
	left: 50%;
	transform: translate(-50%, 0%);
}
</style>
