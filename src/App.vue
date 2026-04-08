<script setup>
import Background from './components/Background.vue'
import debugVar from './components/debugVar.vue'

</script>

<template>
  <debugVar class="absolute" />
  <section class="overflow-hidden w-screen h-screen absolute top-0 left-0">
    <Background />
  </section>
</template>