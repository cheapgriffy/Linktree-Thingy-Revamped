<script setup>
import CustomDetails from '../components/CustomDetails.vue'
</script>

<template>
    <section class="font-['Fuzzy_Bubbles'] text-[#f6edd3] w-full min-h-150 flex flex-col items-center gap-15 p-5">

        <header class=" py-3">
            <h1 class="text-4xl text-center font-bold underline underline-offset">COMMISSION INFO</h1>
        </header>
        <div class="flex flex-row w-[90%] gap-15 justify-around">
            <div>
                <h3 class="text-xl mb-3"><strong class="text-[#9bd38b]!">Stuff I will Draw</strong></h3>
                <ul class="list-disc list-inside">
                    <li>PNGTuber Sprites</li>
                    <li>Telegram Stickers</li>
                    <li>Most species</li>
                    <li>Most body types</li>
                </ul>
            </div>
            <div>
                <h3 class="text-xl mb-3"><strong class="text-[#f6edd3]!">Stuff I like</strong></h3>
                <ul class="list-disc list-inside">
                    <li>Furries, Anthro</li>
                    <li>Pokemons - Pals</li>
                    <li>Cartoon designs</li>
                    <li>Feminine clothes</li>
                </ul>
            </div>
            <div>
                <h3 class="text-xl mb-3"><strong class="text-[#E47979]!">Stuff I wont draw</strong></h3>
                <ul class="list-disc list-inside">
                    <li>Humans</li>
                    <li>Hatefull, racist content</li>
                </ul>
            </div>
        </div>
        <div class="flex w-[85%]">
            <div class="w-[60%] ">
                <h2 class="text-3xl">Commission Process</h2>
                <div class="flex flex-col gap-3 mt-4">
                    <CustomDetails title="Ask, explain your request" open="true" :duration="350"
                        wrapper-class="rounded-xl overflow-hidden bg-[#2f2121]/30" summary-class="text-xl text-[#99d089]"
                        content-class="text-[#f6edd3]">
                        <div class="ml-2 mb-5">
                            <p>Contact me by any media provided on the link page, and provide as
                                much detail as possible about your request.</p>
                            <p>Consider including reference images or specific instructions.</p>
                        </div>
                    </CustomDetails>

                    <CustomDetails title="Sketching" open="true" :duration="350"
                        wrapper-class="rounded-xl overflow-hidden bg-[#2f2121]/30" summary-class="text-xl text-[#99d089] font-bold"
                        content-class="text-[#f6edd3]">
                        <div class="mb-5">
                            <p class="w-full mb-5">Once the idea is clear, I'll start working on the piece, and will start updating it on the <a class="text-blue-200 underline hover:text-white duration-150" href="https://trello.com/b/Hoz3wRbT/griffys-drawing">Trello</a></p>
                        </div>
                    </CustomDetails>

                    <CustomDetails title="Confirmation of sketch - Payement" open="true" :duration="350"
                        wrapper-class="rounded-xl overflow-hidden bg-[#2f2121]/30" summary-class="text-xl text-[#99d089] font-bold"
                        content-class="text-[#f6edd3]">
                        <div class="mb-5">
                            <p class="w-full mb-5">Once the sketch is fully complete, I will reach to you</p>
                            <p>At this point, we will discuss the final details and proceed with the payment.</p>
                        </div>
                    </CustomDetails>
                </div>
            </div>
            <div class="w-[40%] ">

            </div>
        </div>

    </section>
</template>

<style></style>