<script setup>
    import { ref, computed, onMounted } from 'vue';
    import { getRandomInt, distanceToPourcentage } from '../assets/js/GlobalClasses';
    import { useMouse, useWindowSize } from '@vueuse/core';

    
    const { x, y, sourceType } = useMouse();
    const { width, height } = useWindowSize();
    

    const backgroundImages = ref([
        'lake.gif',
        'ping_tiled_backgorund.mp4',
        'unknown_land.gif',
        'wiggly_tuff_guild_night.gif'
    ]);
    
    const currentBackground = ref('');
    
    let paralaxPower = 0.2;

    const imageStyle = computed(() => {
        const xOffset = distanceToPourcentage(x.value, width.value/2) * paralaxPower * -1;
        const yOffset = distanceToPourcentage(y.value, height.value/2) * paralaxPower * -1;
        
        return {
            transform: `translate(${xOffset}px, ${yOffset}px)`,
            width: '120%', 
            height: '120%',
            objectFit: 'cover',
            position: 'absolute',
            top: '0%',
            left: '0%',
            pointerEvents: 'none'
        };
    });

    
    const setRandomBackground = () => {
        const randomIndex = getRandomInt(0, backgroundImages.value.length - 1);
        currentBackground.value = backgroundImages.value[randomIndex];
    };

    
    onMounted(() => {
        setRandomBackground();
    });
</script>


<template>
    <section class="w-screen h-screen absolute text-white overflow-hidden">
        <p>{{ x }}</p> <p>{{ y }}</p>
        <img 
            :src="`/src/assets/Backgrounds/${currentBackground}`" 
            :style="imageStyle"
            alt="Background"
        >
    </section>
</template>