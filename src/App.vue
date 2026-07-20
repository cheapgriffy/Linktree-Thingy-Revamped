<script setup>
import Background from './components/Background.vue'
import debugVar from './components/debugVar.vue'

import { getProfilePicture } from './scripts/GlobalClasses.js'
import { discord_userid, discord_pfp_link } from './scripts/settings.js'


console.log(discord_userid)
getProfilePicture(discord_userid)

</script>


<template>
	<debugVar class="fixed" />

	<nav class="z-10 fixed">
		<router-link to="/"
			class="text-2xl font-[Wondermail] text-white hover:text-[#00ff00] transition-all duration-300">Home</router-link>
		<router-link to="/links"
			class="text-2xl font-[Wondermail] text-white hover:text-[#00ff00] transition-all duration-300">Links</router-link>
	</nav>

	<!-- main content -->
	<section id="content" class="flex flex-col gap-5 justify-center items-center font-[Wondermail]">

		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" :key="$route.path" />
			</transition>
		</router-view>

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

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
	opacity: 1;
}
</style>