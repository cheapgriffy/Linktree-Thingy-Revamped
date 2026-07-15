<script setup>
import { ref, watch } from 'vue'
import { useFetch } from '@vueuse/core'
import { getDiscordCDNLink } from '../scripts/GlobalClasses.js'

const userId = '584096691473350657'
const displaySrc = ref('')

const { data, isFinished, error } = useFetch(`https://api.lanyard.rest/v1/users/${userId}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  afterFetch: async (ctx) => {
    const rawBody = await ctx.response.text()
    ctx.data = rawBody
    return ctx
  },
})

watch(data, (rawBody) => {
  if (!rawBody) return

  try {
    const parsedBody = JSON.parse(rawBody)
    const avatarHash = parsedBody?.data?.discord_user?.avatar
    const avatarUserId = parsedBody?.data?.discord_user?.id || userId

    displaySrc.value = getDiscordCDNLink(avatarUserId, avatarHash)
  } catch (caughtError) {
    console.error('Failed to parse Lanyard response:', caughtError)
  }
}, { immediate: true })
</script>


<template>
    
    <span class="w-35 h-35  border shadow-lg rounded-3xl flex items-center justify-center text-center transform -rotate-45 mb-4 overflow-clip hover:rounded-[100%] transition-all duration-400 hover:scale-110">
        <img class="rotate-45 scale-140 hover:scale-110 transition-all duration-400"
            :src="displaySrc"
            alt="Profile Picture">
    </span>
    
</template>


<style>

</style>
