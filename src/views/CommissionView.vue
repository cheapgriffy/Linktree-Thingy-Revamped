<script setup>
import CustomDetails from '../components/CustomDetails.vue'
import TimezoneClock from '../components/TimezoneClock.vue'

import { ref, onMounted } from 'vue'
import { links_list } from '../scripts/settings'

</script>

<template>
    <section
        class="font-['Fuzzy_Bubbles'] text-[#f6edd3] w-full min-h-150 flex flex-col items-center gap-15 p-5  max-[800px]:p-2 max-[800px]:py-8 max-[800px]:gap-10">

        <header class=" py-3">
            <h1 class="text-4xl text-center font-bold underline underline-offset-4 underline-2 max-[800px]:text-3xl">
                COMMISSION INFO</h1>
        </header>
        <div id="Will-Draw-List"
            class="flex flex-row flex-wrap w-[90%] gap-15 justify-around max-[800px]:justify-center max-[800px]:gap-5 max-[800px]:w-[95%]">
            <div>
                <h3 class="text-xl mb-3 max-[800px]:text-lg"><strong class="text-[#9bd38b]! ">Stuff I will Draw</strong>
                </h3>
                <ul class="list-disc list-inside max-[800px]:text-sm">
                    <li>PNGTuber Sprites</li>
                    <li>Telegram Stickers</li>
                    <li>Most species</li>
                    <li>Most body types</li>
                </ul>
            </div>
            <div>
                <h3 class="text-xl mb-3 max-[800px]:text-lg"><strong class="text-[#f6edd3]! ">Stuff I like</strong></h3>
                <ul class="list-disc list-inside max-[800px]:text-sm">
                    <li>Furries, Anthro</li>
                    <li>Pokemons - Pals</li>
                    <li>Cartoon designs</li>
                    <li>Feminine clothes</li>
                </ul>
            </div>
            <div>
                <h3 class="text-xl mb-3 max-[800px]:text-lg"><strong class="text-[#E47979]!  ">Stuff I wont
                        draw</strong></h3>
                <ul class="list-disc list-inside max-[800px]:text-sm">
                    <li>Humans</li>
                    <li>Hatefull, racist content</li>
                </ul>
            </div>
        </div>

        <div id="left-side" class="w-auto flex justify-center mt-5 max-[800px]:flex-col">

            <div id="text-content" class="min-[800px]:w-[80%] flex flex-col gap-10 max-[800px]:w-full">
                <div id="pricelist" class="flex flex-wrap gap-10 justify-center">
                    <span class="text-center">
                        <p class="font-bold text-lg">PNGTuber Sprites : 36€</p>
                        <img class="h-50 rounded-lg" src="/assets/images/pngtuber.webp"
                            alt="PNGTuber animated sprites examples">
                    </span>
                    <span class="text-center">
                        <p class="font-bold text-lg">Stickers : 20€ each</p>
                        <img class="h-50 rounded-lg" src="/assets/images/stickers-example.webp"
                            alt="Griffy sketch wearing a kigurumi">
                    </span>
                    <span class="text-center">
                        <p class="font-bold text-lg">Sketch : 12€</p>
                        <img class="h-50 rounded-lg" src="/assets/images/kigurumi-sketch-example.webp"
                            alt="Griffy sketch wearing a kigurumi">
                    </span>
                    <span class="text-center">
                        <p class="font-bold text-lg">Reference sheet : 60€</p>
                        <img class="h-50 rounded-lg" src="/assets/images/arno-references.webp"
                            alt="Arno, complete reference sheet">
                    </span>
                </div>

                <div class="flex flex-col gap-3 mt-4">
                    <h2 class="text-3xl max-[800px]:text-center font-bold text-center mb-5">Commission Process</h2>
                    <CustomDetails title="Ask, explain your request" open="true" :duration="350"
                        wrapper-class="rounded-xl overflow-hidden bg-[#2f2121]/30"
                        summary-class="text-xl text-[#99d089]" content-class="text-[#f6edd3]"
                        attached-image="/assets/images/talking-customer-me.gif">
                        <div class="ml-2 mb-5 max-[800px]:text-sm">
                            <p>Contact me by any media provided on the link page, and provide as
                                much detail as possible about your request.</p>
                            <p>Consider including reference images or specific instructions.</p>
                        </div>
                        <!-- <img src="/assets/images/talking-customer-me.gif" class="ml-auto h-30 object-cover" /> -->
                    </CustomDetails>

                    <CustomDetails title="Sketching" open="true" :duration="350"
                        wrapper-class="rounded-xl overflow-hidden bg-[#2f2121]/30"
                        summary-class="text-xl text-[#99d089] font-bold" content-class="text-[#f6edd3]">
                        <div class="mb-5 max-[800px]:text-sm">
                            <p class="w-full mb-5">Once the idea is clear, I'll start working on the piece, and will
                                start updating it on the <a
                                    class="text-blue-200 underline hover:text-white duration-150"
                                    href="https://trello.com/b/Hoz3wRbT/griffys-drawing">Trello</a></p>
                        </div>
                    </CustomDetails>

                    <CustomDetails title="Confirmation of sketch - Payement" open="true" :duration="350"
                        wrapper-class="rounded-xl overflow-hidden bg-[#2f2121]/30"
                        summary-class="text-xl text-[#99d089] font-bold" content-class="text-[#f6edd3]">
                        <div class="mb-5 flex flex-col gap-5 max-[800px]:text-sm">
                            <p class="w-full">Once the sketch is fully complete, I will reach to you, You're allowed to
                                request changes if needed.</p>
                            <p class="text-[#f6edd3]/30">That's the easiest part to modify ^w^ We can still discuss
                                changes later tho</p>
                            <p class="w-full">We will discuss the final details and proceed with the payment.</p>
                        </div>
                    </CustomDetails>

                    <CustomDetails title="Rendering the artwork" open="true" :duration="350"
                        wrapper-class="rounded-xl overflow-hidden bg-[#2f2121]/30"
                        summary-class="text-xl text-[#99d089] font-bold" content-class="text-[#f6edd3]">
                        <div class="mb-5 flex flex-col gap-5 max-[800px]:text-sm">
                            <p class="w-full">I will proceed to render out the piece, you can see updates on <a
                                    class="text-blue-200 underline hover:text-white duration-150"
                                    href="https://trello.com/b/Hoz3wRbT/griffys-drawing">Trello</a></p>
                            <p>You're still allowed to ask for changes, but depending on the complexity, it might be
                                charged more.</p>
                        </div>
                    </CustomDetails>

                    <CustomDetails title="Artwork completion" open="true" :duration="350"
                        wrapper-class="rounded-xl overflow-hidden bg-[#2f2121]/30"
                        summary-class="text-xl text-[#99d089] font-bold" content-class="text-[#f6edd3]">
                        <div class="mb-5 flex flex-col gap-5 max-[800px]:text-sm">
                            <p>I'll reach to you once the piece is finished, depending on wich media we used to contact
                            </p>
                            <p>I will send you the final version for your aproval. or foward it to a cdn to send it
                                without compression</p>
                            <p>You're still allowed to ask for changes, but depending on the complexity, it might be
                                charged more.</p>
                        </div>
                    </CustomDetails>
                </div>
            </div>

            <div id="side-explaination"
                class="w-[25%] h-fit self-start flex sticky top-20 max-[800px]:static max-[800px]:w-full">
                <ul class="text-sm flex flex-col gap-5 max-[800px]:items-center max-[800px]:w-full text-right mr-2">
                    <li>Payement through Paypal</li>
                    <li>Prices can changed based on complexity</li>
                    <TimezoneClock :timezone="'Europe/Paris'" :label="'Time at my place'" :format="'HH:mm:ss'" />
                </ul>
            </div>

        </div>

    </section>
</template>