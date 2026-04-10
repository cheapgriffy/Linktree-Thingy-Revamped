<script setup>
import { ref, watch } from 'vue'
import { useFetch } from '@vueuse/core'

// using https://github.com/AdvanceFTeam/PFP-API api
// getting raw image
const { isFetching, error, data } = useFetch('https://avatar-cyan.vercel.app/api/pfp/584096691473350657/image?size=1024&format=webp').blob()

// blob url container
const displaySrc = ref('')

// based on output, create a fake url to be fowarded to tag
watch(data, (newBlob) => {
  if (newBlob) {
    displaySrc.value = URL.createObjectURL(newBlob)
  }
})

</script>


<template>
    
    <span class="w-35 h-35  border shadow-lg rounded-3xl flex items-center justify-center text-center transform -rotate-45 mb-4 overflow-clip hover:rounded-[100%] transition-all duration-400 hover:scale-110">
        <img class="rotate-45 scale-180 hover:scale-140 transition-all duration-400"
            :src="displaySrc"
            alt="">
    </span>
    
</template>


<style>

</style>
