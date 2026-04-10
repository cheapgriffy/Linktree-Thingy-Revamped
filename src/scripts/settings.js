//!----------------------------------------------------------!//
//! Useful for script setup scenario, to be edited later too !//
//!----------------------------------------------------------!//

import { ref } from 'vue';


const curr_bg_image = ref('');
const paralax_power = ref(0.2);

// Hardcoded bg_images, need to edit on each bg add. check why below
const bg_images = ref([
    "lake.gif",
    "unknown_land.gif",
    "wiggly_tuff_guild_night.gif"
])

//? cant import and filter data from /public in js,
//? It work in vite, but not when builded, 
// double ../ cause its higher than src
// const bg_folder_import = import.meta.glob('../../public/assets/Backgrounds/*.gif', { eager: true, import: 'default' })

// bg_images.value = Object.keys(bg_folder_import)                 // get all entries
//                             .map(path => path.split('/')        // separate eleemnts from ``/``
//                                 .pop())                         // pop destroy BUT OUTPUT last element, since its map() it only get pop return

// ref cause is modified from debug var
let links_list = ref(
    [
    {
        title: "Discord",
        link: "https://discord.com/users/584096691473350657",
        icon_url: "/assets/icons/discord_icon.png",
        active: true,
    },
    {
        title: "Telegram",
        link: "https://t.me/CheapGriffy",
        icon_url: "/assets/icons/telegram.webp",
        active: true,
    },
    {
        title: "Reddit",
        link: "https://www.reddit.com/user/CheapGriffy/",
        icon_url: "/assets/icons/reddit_pixel.webp",
        active: true,
    },
    {
        title: "BlueSky",
        link: "https://bsky.app/profile/cheapgriffy.bsky.social",
        icon_url: "/assets/icons/bluesky_pixel.webp",
        active: true,
    },
    {
        title: "Youtube Music",
        link: "https://music.youtube.com/channel/UCNxqu6tEm7lf2r0kP64d1XQ?si=4uCwc1cifToxMWfx",
        icon_url: "/assets/icons/yt_music.webp",
        active: true,
    },
    {
        title: "Steam",
        link: "https://steamcommunity.com/profiles/76561198254767370/",
        icon_url: "/assets/icons/STEAMICON.webp",
        active: true,
    },
    {
        title: "Github",
        link: "https://github.com/cheapgriffy",
        icon_url: "/assets/icons/github.webp",
        active: true,
    },
    {
        title: "Drawing Trello",
        link: "https://trello.com/b/Hoz3wRbT/griffys-drawing",
        icon_url: "/assets/icons/trello_icon.webp",
        active: true,
    },
    {
        title: "Mes Notes du taf",
        link: "https://notes.cheapgriffy.fr/",
        icon_url: "",
        active: true,
    },

]
)

// Personal means they'll be multiple set for each cathegories
// likes professionnal and shit
// ~= 65 - usernam.lenght chars pers phrasess  to prevent overflow
let personal_phrases = [
    "Hello there ! welcome to my linktree clone :D", 
    "I was too stingy to pay... and though it would be fun to make one !", 
    "There's a few of my links here, come take a look.",
    "Background is random, cause I think they all look great. ^w^",
    "I remade this on VueJS as a pretext to train myself",
    "The font ? its 'wondermail' a PMD EoS font recreated by fans",
    "Take a look at the commissions I did in the past with the Trello link",
    "I listen to a lot of games ost, check my playlist's",
    "All hail Express JS",
    "I will respond on both Discord or Telegram, if I'm not overwhelmed '^^",
    "I got my shy periods... so dont take my absence as a offense",
    "W-why are you taking so long on that page... I feel nervous ><",
]

// used as flag in textBox component
const username = ref("")
// Sets manually cause setting it in ref would make not reactive with debugVar
username.value = "CheapGriffy"

export {
    paralax_power,
    curr_bg_image,
    bg_images,
    links_list,
    personal_phrases,
    username,
}    
