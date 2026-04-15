import { ref, computed } from 'vue';

// This is our "Source of Truth". Change this, and the whole app updates!
const curr_profile_name = ref('personal');

const profiles = ref({
    personal: {
        links_list: [
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
        ],
        phrases: [
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
        ],
        username: "CheapGriffy",
    },
    professionnal: {
        links_list: [
            {
                title: "test",
                link: "#",
                icon_url: "",
                active: true,
            }
        ],
        phrases: [
            "Hey, its a test, dont mind me"
        ],
        username: "Timéo Felix"
    },
});


// convert profile to readable from script values
const links_list = computed(() => profiles.value[curr_profile_name.value].links_list);
const personal_phrases = computed(() => profiles.value[curr_profile_name.value].phrases);

// for debugvar compatbility
const username = computed({
    get: () => 
        profiles.value[curr_profile_name.value].username,
    set: (val) => { 
        profiles.value[curr_profile_name.value].username = val 
    }
});

const curr_bg_image = ref('');
const paralax_power = ref(0.2);

const bg_images = ref([
    "lake.gif",
    "unknown_land.gif",
    "wiggly_tuff_guild_night.gif"
]);

const isNavHovered = ref(false)

export {
    paralax_power,
    curr_bg_image,
    bg_images,
    links_list,
    personal_phrases,
    username,
    profiles,
    curr_profile_name,
    isNavHovered,
}
