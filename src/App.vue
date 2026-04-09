<script setup>
import Background from './components/Background.vue'
import debugVar from './components/debugVar.vue'
import LinkButton from './components/LinkButton.vue'
import { links_list } from './assets/js/settings'

</script>


<template>
	<debugVar class="absolute" />

	<!-- main content -->
	<section id="content" class="flex flex-col gap-5 justify-center items-center w-screen h-screen font-[Wondermail]">
		<template v-for="(item, index) in links_list" :key="item.title">
			<LinkButton :link_obj="links_list[index]" />
		</template>
	</section>

	<!-- paralaxed background -->
	<div id="bg-wrapper" class="-z-1 overflow-hidden w-screen h-screen absolute top-0 left-0">
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