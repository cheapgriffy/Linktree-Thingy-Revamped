<script setup>

import WavingGriffy from '../components/WavingGriffy.vue'

</script>

<template>
    <section class="max-[800px]:h-150">
        <section class="w-full flex justify-center gap-15 p-5
                        max-[800px]:flex-col max-[800px]:items-center max-[800px]:justify-end max-[800px]:p-2">

            <!-- Left Text Side -->
            <div class="w-auto flex items-center flex-col text-center font-[Fuzzy_Bubbles] font-bold text-[#f6edd3] text-shadow-lg/20
                        max-[800px]:w-full  max-[800px]:z-10">
                <img class="w-130 mt-8" src="/assets/images/CheapGriffy.png" alt="Handwritten Cheap Griffy">

                <span class="flex items-center justify-center gap-4 text-3xl stroke
                            max-[800px]:flex-wrap max-[800px]:text-2xl">
                    <p>He/Him</p>
                    <span class="w-2 h-2 bg-[#f6edd3] rounded-full
                                max-[800px]:w-1.5 max-[800px]:h-1.5"></span>
                    <p>FR/EN</p>
                    <span class="w-2 h-2 bg-[#f6edd3] rounded-full
                                max-[800px]:w-1.5 max-[800px]:h-1.5"></span>

                    <span class="flex gap-2
                                max-[800px]:basis-full max-[800px]:justify-center">
                        <img class="w-10 rounded-lg border-[#f6edcc] border-2" src="/assets/images/Flag_of_France.svg.webp" alt="">
                        <img class="w-10 rounded-lg border-[#f6edcc] border-2" src="/assets/images/Flag_of_the_United_States.webp" alt="">
                    </span>
                </span>

                <span id="divider" class="bg-[#f6edd3] w-[80%] h-1.5 rounded-full mt-2 border-[#4E4E4E] border
                                            max-[800px]:w-[70%]"></span>
                <p class="mt-5 text-2xl w-110 stroke
                            max-[800px]:text-lg max-[800px]:w-[90%]">
                    Howdy, Im Griffy I like to draw and design characters, and make silly animations
                </p>
            </div>

            <!-- Right Cosmetic side -->
            <WavingGriffy />

        </section>
    </section>
</template>

<style></style>


<!-- font-['Fuzzy_Bubbles'] -->