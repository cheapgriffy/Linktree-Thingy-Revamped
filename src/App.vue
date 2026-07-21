<script setup>
import Background from './components/Background.vue'
import debugVar from './components/debugVar.vue'
import UniversalNav from './components/UniversalNavBar.vue'
import LinkView from './views/LinkView.vue'
import ProfilePicture from './components/ProfilePicture.vue'



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
		<section v-else class="bg-[#af6f54] rounded-4xl min-w-250 min-h-150">

			<div id="card-navbar" class="bg-[#4d281d] w-full h-25 half-rounded flex justify-center items-center gap-5 text-[#ffe894] text-2xl font-['Fuzzy_Bubbles']">
				<router-link to="/" class=" p-2 px-5 rounded-full border-[rgb(0,0,0,0)] border-2 hover:border-[#ffe894] transition-all">Home</router-link>
				<router-link to="/links" class=" p-2 px-5 rounded-full border-[rgb(0,0,0,0)] border-2 hover:border-[#ffe894] transition-all">Links</router-link>
			</div>

			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" :key="$route.path" />
				</transition>
			</router-view>

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

.half-rounded{
	border-radius: 1.90rem 1.90rem 0% 0%;
}
</style>