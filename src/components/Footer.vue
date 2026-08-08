<script setup>

import textWithCondition from './TextWithCondition.vue'
import { curr_bg_image, } from '../scripts/settings.js'

</script>

<template>
    <footer class="w-full h-30 rounded-b-3xl flex justify-center items-center bg-[#2b2223] gap-3 p-3 font-[Fuzzy_Bubbles] text-[#f6edd3] text-shadow-lg/20
                    max-[800px]:text-xs max-[800px]:gap-1 max-[800px]:h-auto max-[800px]:items-start">
        <div class="h-full w-[33%] max-[800px]:w-[50%]">
            <textWithCondition :content="'Post my art, but credit me'" :correct="true" />
            <textWithCondition :content="'AI training or editing of my art'" :correct="false" />
        </div>
        <div id="Commission state" class="h-full w-[33%] max-[800px]:w-[50%]">
            <!-- TODO make "commission open" not hardcoded -->
            <span class="flex gap-2"><strong>Commissions : </strong> <textWithCondition :content="'Open'" :correct="true" /></span>
            <span class="flex gap-2"><strong>Art Trades : </strong> <textWithCondition :content="'Yeees'" :correct="true" /></span>
        </div>
        <div class="h-full w-[33%] max-[800px]:hidden">
            <p>Current Background : 
                <a class="hover:text-[#ffff00] transition-colors " :href="'/public/assets/Backgrounds/' +curr_bg_image" target="_blank">
                    {{ curr_bg_image }}
                </a>
            </p>
        </div>
    </footer>
</template>