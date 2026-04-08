<script setup>
    import { ref } from 'vue';
    import { useMouse, useWindowSize, onKeyStroke } from '@vueuse/core';
    

    const { x, y } = useMouse();
    const { width, height } = useWindowSize();

    // to know, this.value is not needed, ref.value is only in script
    const is_debug_mode = ref(false);

    onKeyStroke("k", (e) => {
        is_debug_mode.value = !is_debug_mode.value;
    })

</script>

<template>
    <div v-if="is_debug_mode" class="bg-gray-800/80 w-50 p-5 rounded-lg font-[Outfit] font-light m-2">
        <p style="mix-blend-mode:exclusion; color: white;">posX: {{ x }}</p> 
        <p style="mix-blend-mode:exclusion; color: white;">posY: {{ y }}</p>

        <p style="mix-blend-mode:exclusion; color: white;">screenW: {{ width }}</p> 
        <p style="mix-blend-mode:exclusion; color: white;">screenH: {{ height }}</p>

        <p style="mix-blend-mode:exclusion; color: white;">centerX: {{ width/2 }}</p> 
        <p style="mix-blend-mode:exclusion; color: white;">centerY: {{ height/2 }}</p>
    </div>
</template>


