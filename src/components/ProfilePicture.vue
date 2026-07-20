<script setup>
    import { ref, watch } from 'vue'
    import { discord_pfp_link } from '../scripts/settings'
    
    
</script>


<template>
    
    <span class="w-35 h-35  border shadow-lg rounded-3xl flex items-center justify-center text-center transform -rotate-45 mb-4 overflow-clip hover:rounded-[100%] transition-all duration-400 hover:scale-110">
        <img class="rotate-45 scale-140 hover:scale-110 transition-all duration-400"
            :src="discord_pfp_link"
            alt="Profile Picture">
    </span>
    
</template>


<style>

</style>
