<script setup>

import LinkButton from '../components/LinkButton.vue'
import TextBox from '../components/TextBox.vue'
import ProfilePicture from '../components/ProfilePicture.vue'

import { links_list, personal_phrases, username } from '../scripts/settings'

</script>

<template class="transition-all">
    <div class="flex flex-col justify-center items-center gap-5">
        <!-- Header -->
        <div class="my-10 flex flex-col justify-center items-center gap-5">
            <ProfilePicture />
            <TextBox :phrases="personal_phrases" :username="username" sleepTime=50 />
        </div>

        <!-- Links -->
        <template v-for="(item, index) in links_list" :key="item.title">
            <LinkButton :link_obj="links_list[index]" />
        </template>
    </div>
</template>
