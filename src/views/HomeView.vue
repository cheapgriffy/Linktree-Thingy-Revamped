<script setup>

import WavingGriffy from '../components/WavingGriffy.vue'

</script>

<template>
    <section>
        <section class="w-full flex justify-center gap-15 p-5">
            <div class="w-auto flex items-center flex-col text-center font-[Fuzzy_Bubbles] font-bold text-[#f6edd3] text-shadow-lg/20">
                <img class="w-130 mt-8" src="/assets/images/CheapGriffy.png" alt="">
                <span class="flex items-center gap-4 text-3xl  stroke">
                    <p>He/Him</p>
                    <span class="w-2 h-2 bg-[#f6edd3] rounded-full"></span>
                    <p>FR/EN</p>
                </span>
                <span id="divider" class="bg-[#f6edd3] w-[80%] h-1.5 rounded-full mt-2 border-[#4E4E4E] border"></span>
                <p class="mt-5 text-2xl w-110 stroke">Howdy, Im Griffy I like to draw and design characters, and make silly animations</p>
            </div>
            <WavingGriffy />
        </section>
        
    </section>
</template>

<style>
.stroke {
  text-shadow: -1px -1px 0 #4E4E4E, 1px -1px 0 #4E4E4E, -1px 1px 0 #4E4E4E, 1px 1px 0 #4E4E4E;
}
</style>


<!-- font-['Fuzzy_Bubbles'] -->