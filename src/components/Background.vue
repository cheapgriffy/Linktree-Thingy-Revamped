<script setup>
    import { ref, computed, onMounted } from 'vue';
    import { getRandomInt, distanceToPourcentage } from '../assets/js/GlobalClasses';
    import { useMouse, useWindowSize } from '@vueuse/core';
    import { paralax_power, curr_bg_image, bg_images } from '../assets/js/settings';

    
    const { x, y, sourceType } = useMouse();
    const { width, height } = useWindowSize();
    



    //paralax effect
    const imageStyle = computed(() => {
        const xOffset = distanceToPourcentage(x.value, width.value/2) * paralax_power.value * -1;
        const yOffset = distanceToPourcentage(y.value, height.value/2) * paralax_power.value * -1;
        
        return {
            position: 'absolute',
            transform: `translate(${xOffset}px, ${yOffset}px) scale(${1 + paralax_power.value * 0.5})`,
            width: "100vw",
            height: "100vh",
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: '-1',
            top: "0%",
            left: "0%",
            pointerEvents: 'none',
        };
    });

    
    const setRandomBackground = () => {
        const randomIndex = getRandomInt(0, bg_images.value.length - 1);
        curr_bg_image.value = bg_images.value[randomIndex];
    };

    
    onMounted(() => {
        setRandomBackground();
    });
</script>


<template>
    <img class="overflow-hidden" 
        :src="`/src/assets/Backgrounds/${curr_bg_image}`" 
        :style="imageStyle"
        alt="Background"
    >
</template>