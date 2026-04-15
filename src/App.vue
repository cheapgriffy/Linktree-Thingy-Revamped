<script setup>
import Background from './components/Background.vue'
import debugVar from './components/debugVar.vue'
import LinkButton from './components/LinkButton.vue'
import TextBox from './components/TextBox.vue'
import ProfilePicture from './components/ProfilePicture.vue'
import ProfileNavBar from './components/ProfileNavBar.vue'


import { links_list, personal_phrases, username, curr_profile_name } from './scripts/settings'


</script>


<template>
	<debugVar class="fixed" />
	<ProfileNavBar class="z-1" />

	<!-- main content -->
	<section id="content" class="flex flex-col gap-5 justify-center items-center font-[Wondermail]">
		
		<!-- Header -->
		<div class="my-10 mt-30 flex flex-col justify-center items-center gap-5">
			<ProfilePicture />
			<!-- if key value change, it rerender -->
			<TextBox :key="curr_profile_name" :phrases="personal_phrases" :username="username" sleepTime=50 />
		</div>

		<!-- LInks -->
		<template v-for="(item, index) in links_list" :key="item.title">
			<LinkButton :link_obj="links_list[index]" />
		</template>
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
