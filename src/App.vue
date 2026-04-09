<script setup>
import Background from './components/Background.vue'
import debugVar from './components/debugVar.vue'
import LinkButton from './components/LinkButton.vue'

</script>

<template>
  <debugVar class="absolute" />
  <section id="content" class="flex justify-center items-center w-screen h-screen font-[Wondermail]">
    <LinkButton title="Discord" isActive="true" />
  </section>
  <div id="bg-wrapper" class="overflow-hidden w-screen h-screen absolute top-0 left-0">
    <Background />
  </div>
</template>

<style>
@font-face {
    font-family: "WonderMail";
    src: url("./assets/fonts/wondermail.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
#id {
  font-family: "WonderMail";
}
</style>