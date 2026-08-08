<script setup>
import Background from './components/Background.vue'
import debugVar from './components/debugVar.vue'
import UniversalNav from './components/UniversalNavBar.vue'
import LinkView from './views/LinkView.vue'
import ProfilePicture from './components/ProfilePicture.vue'
import Footer from './components/Footer.vue'

import { getProfilePicture } from './scripts/GlobalClasses.js'
import { discord_userid, discord_pfp_link } from './scripts/settings.js'

// GET profile picture with lanyard
getProfilePicture(discord_userid)

</script>


<template>
	<debugVar class="fixed z-20" />

	<UniversalNav v-if="$route.path === '/links'" />

	<!-- main content -->
	<section id="content"
		class="flex flex-col w-full min-h-screen gap-5 justify-center items-center font-[Wondermail] transition-all duration-200 p-5">

		<!-- hardcoded to overide global div -->
		<LinkView v-if="$route.path === '/links'" />

		<!-- Card section -->
		<section v-else class="flex flex-col justify-between card-background rounded-4xl min-w-[80%] max-w-200 min-h-180 border-[#4E4E4E] paperlike shadow-2xl
								max-[800px]:w-[99%] max-[800px]:h-[99%]">

			<!-- TODO make a hamburger menu -->
			<!-- TODO Or swipe left / right to cycle routes -->
			<nav id="card-navbar" class="bg-[#4d281d] w-full h-23 rounded-t-[1.65rem] flex justify-center items-center gap-5 text-[#ffe894] text-2xl font-['Fuzzy_Bubbles']
										max-[800px]:hidden">
				<router-link to="/" class=" p-2 px-5 rounded-full border-[rgb(0,0,0,0)] border-2 hover:border-[#ffe894] transition-all">Home</router-link>
				<router-link to="/commission" class=" p-2 px-5 rounded-full border-[rgb(0,0,0,0)] border-2 hover:border-[#ffe894] transition-all">Commission</router-link>
				<router-link to="/links" class=" p-2 px-5 rounded-full border-[rgb(0,0,0,0)] border-2 hover:border-[#ffe894] transition-all">Links</router-link>
			</nav>

			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" :key="$route.path" />
				</transition>
			</router-view>

			<Footer  />
		</section>

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

.paperlike{
	border: 0.4rem solid #4E4E4E;
	box-shadow: 0 0 0 0.4rem rgba(255, 255, 255, 1);
}

.card-background{
	background-color: #a76a50;
	background-image: url('/assets/motif/grid.png');

	animation: backgroundIdle 2s linear infinite;
}
@keyframes backgroundIdle{
	0%{
		background-position: 0 0;
	}
	100%{
		background-position: 60px 60px;
	}
}

.view-wrapper {
  transition: height 0.3s ease;
  overflow: hidden;
  position: relative;
}

@media (max-width: 800px) {
/* max-[800px]: */
}

</style>