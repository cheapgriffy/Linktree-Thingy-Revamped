<script setup>
import Background from './components/Background.vue'
import debugVar from './components/debugVar.vue'



</script>


<template>
	<debugVar class="fixed" />


	<!-- main content -->
	<section id="content" class="flex flex-col gap-5 justify-center items-center font-[Wondermail]">
	
		<router-view />		

	</section>

	<!-- paralaxed background -->
	<div id="bg-wrapper" class="-z-1 overflow-hidden w-screen h-screen fixed top-0 left-0">
		<Background />
	</div>
</template>


<style>
@font-face {
	font-family: "WonderMail";
	src: url("/assets/fonts/wondermail.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}

#id {
	font-family: "WonderMail";
}
</style>