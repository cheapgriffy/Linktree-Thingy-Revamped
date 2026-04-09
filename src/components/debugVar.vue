<script setup>
    import { ref, computed } from 'vue';
    import { useMouse, useWindowSize, onKeyStroke } from '@vueuse/core';
    import { paralax_power, links_list } from '../assets/js/settings';
    import { distanceToPourcentage } from '../assets/js/GlobalClasses';
    

    const { x, y } = useMouse();
    const { width, height } = useWindowSize();

    // to know, this.value is not needed, ref.value is only in script
    const is_debug_mode = ref(true);

    onKeyStroke("k", (e) => {
        is_debug_mode.value = !is_debug_mode.value;
    })


    const paralaxpreview = computed(() => {
        const xOffset = distanceToPourcentage(x.value, width.value/2) * paralax_power.value;
        const yOffset = distanceToPourcentage(y.value, height.value/2) * paralax_power.value;
        return{
            transform: `translate(${xOffset}px, ${yOffset}px) scale(${1 + paralax_power.value * 0.5})`,
            position: 'relative',
            top: "50%",
            left: "50%",
        }
    })

</script>

<template>
    <div v-if="is_debug_mode" class="bg-gray-800/80 min-w-70 p-5 rounded-lg font-[Outfit] font-light m-2">
        
        <div :style="{ width:width * 0.04 + 'px', height:height * 0.04 + 'px' }" class="bg-black/50 ">
            <div class="w-1 h-1 bg-white rounded-full" :style='paralaxpreview'></div>
        </div>

        <div class="flex gap-5">
            <p class="w-20 debug-label">posX: <strong>{{ x }}</strong></p>
            <p class="w-20 debug-label">posY: <strong>{{ y }}</strong></p>
        </div>

        <div class="flex gap-5">
            <p class="debug-label">screenW: <strong>{{ width }}</strong></p>
            <p class="debug-label">screenH: <strong>{{ height }}</strong></p>
        </div>

        <div class="flex gap-5">
            <p class="debug-label">centerX: <strong>{{ width/2 }}</strong></p>
            <p class="debug-label">centerY: <strong>{{ height/2 }}</strong></p>
        </div>

        <p class="debug-label">paralax_power: <strong>{{ paralax_power }}</strong></p>

        <span class="bg-white/20 w-full h-0.5 block rounded-4xl my-2"></span>

        <ul class="block">
        <template v-for="item in links_list" :key="item.title">
            <li>
                <input v-model="item.active" type="checkbox">
                <label for="item.title" class="debug-label">{{ item.title }}</label>
            </li>
        </template>
        </ul>

    </div>
</template>

<style>
.debug-label{
    mix-blend-mode:exclusion;
    color: white
}
strong{
    color: yellow;
}
</style>
