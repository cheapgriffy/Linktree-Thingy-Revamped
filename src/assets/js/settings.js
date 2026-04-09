//! Useful for script setup scenario, to be edited later too

import { ref } from 'vue';


//? Background Related
const paralax_power = ref(0.2);
const curr_bg_image = ref('');

const bg_images = ref([
        'lake.gif',
        'unknown_land.gif',
        'wiggly_tuff_guild_night.gif'
]);

//? Link Rendering list 
// ref cause is modified from debug var
let links_list = ref([
    {
        title: "Discord",
        link: "https://discord.com/users/584096691473350657",
        icon_url: "../src/assets/icons/discord_icon.png",
        active: true,
    },
    {
        title: "Goober",
        link: "https://discord.com/users/584096691473350657",
        icon_url: "../src/assets/icons/discord_icon.png",
        active: true,
    },
    {
        title: "Wawa",
        link: "https://discord.com/users/584096691473350657",
        icon_url: "../src/assets/icons/discord_icon.png",
        active: true,
    },
    {
        title: "Test",
        link: "https://discord.com/users/584096691473350657",
        icon_url: "../src/assets/icons/discord_icon.png",
        active: true,
    },
])

export {
    paralax_power,
    curr_bg_image,
    bg_images,
    links_list
}    
