<script setup>
    import { useMouse, useWindowSize } from '@vueuse/core';

    const { x, y} = useMouse();
    const { width, height } = useWindowSize();
</script>

<template>
    <div class="bg-gray-800/80 w-50 p-5 rounded-lg font-[Outfit] font-light m-2">
        <p style="mix-blend-mode:exclusion; color: white;">posX: {{ x }}</p> 
        <p style="mix-blend-mode:exclusion; color: white;">posY: {{ y }}</p>

        <p style="mix-blend-mode:exclusion; color: white;">screenW: {{ width }}</p> 
        <p style="mix-blend-mode:exclusion; color: white;">screenH: {{ height }}</p>

        <p style="mix-blend-mode:exclusion; color: white;">centerX: {{ width/2 }}</p> 
        <p style="mix-blend-mode:exclusion; color: white;">centerY: {{ height/2 }}</p>
    </div>
</template>