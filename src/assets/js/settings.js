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
        title: "Telegram",
        link: "https://t.me/CheapGriffy",
        icon_url: "../src/assets/icons/telegram.webp",
        active: true,
    },
    {
        title: "Reddit",
        link: "https://www.reddit.com/user/CheapGriffy/",
        icon_url: "../src/assets/icons/reddit_pixel.webp",
        active: true,
    },
    {
        title: "BlueSky",
        link: "https://bsky.app/profile/cheapgriffy.bsky.social",
        icon_url: "../src/assets/icons/bluesky_pixel.webp",
        active: true,
    },
    {
        title: "Youtube Music",
        link: "https://music.youtube.com/channel/UCNxqu6tEm7lf2r0kP64d1XQ?si=4uCwc1cifToxMWfx",
        icon_url: "../src/assets/icons/yt_music.webp",
        active: true,
    },
    {
        title: "Steam",
        link: "https://steamcommunity.com/profiles/76561198254767370/",
        icon_url: "../src/assets/icons/STEAMICON.webp",
        active: true,
    },
    {
        title: "Github",
        link: "https://github.com/cheapgriffy",
        icon_url: "../src/assets/icons/github.webp",
        active: true,
    },
    {
        title: "Drawing Trello",
        link: "https://trello.com/b/Hoz3wRbT/griffys-drawing",
        icon_url: "../src/assets/icons/trello_icon.webp",
        active: true,
    },

])

export {
    paralax_power,
    curr_bg_image,
    bg_images,
    links_list
}    
