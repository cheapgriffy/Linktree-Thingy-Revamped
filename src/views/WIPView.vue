<script>

</script>

<template>
    <section class="font-['Fuzzy_Bubbles'] text-[#f6edd3] w-full h-110 flex items-center gap-5 justify-center p-5">
        <div class="flex flex-col items-center gap-15 justify-center p-5 w-[60%]">
            <h1 id="wip-h1" class=" text-5xl ">Still Working on it '^^</h1>
            <p class="text-center text-xl">This page is currently being worked on, <br> you might have to wait a bit to see it <br> sowwy sowwy '^^</p>
            <router-link to="/" class=" p-2 px-5 rounded-full border-[rgb(0,0,0,0)] border-2 hover:border-[#ffe894] transition-all select-none text-2xl">Go back Home</router-link>
        </div>
        <div class="w-[30%]">
            <img class="" src="/assets/images/sorry-gif.gif" alt="">
        </div>
    </section>
</template>

<style>
#wip-h1{
    text-underline-offset: 1rem;
    text-decoration: underline  dashed;
}
</style>