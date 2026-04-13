<script setup>
import { transform } from '@vue/compiler-core';
import { transition, useScroll } from '@vueuse/core'
import { computed } from 'vue';

const { x, y, isScrolling, arrivedState, directions } = useScroll(window)


const disapear_onscroll = computed(() => {
    

    return{
        // most animation for now
        transition: 'all 0.2s ease-in-out',
        transform: arrivedState.top ? 'translate(-50%, 0)' : 'translate(-50%, -150%)',

    }
})
</script>

<template>
    <div :style="disapear_onscroll" class="fixed-x-center bg-[#424242] border-2 border-[#1f1f1f46] rounded-full w-100 h-15">
        <p>{{ directions.top }}</p>
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