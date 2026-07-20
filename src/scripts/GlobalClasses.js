import { discord_pfp_link } from './settings.js'
import { useFetch } from '@vueuse/core'
import { ref, watch } from 'vue'

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {nomre 1} a 
 * @param {nombre 2} b 
 * @returns la distance en pourcentage entre les deux nombre
*/
const distanceToPourcentage = (a, b) => {
    let result = a - b
    result = result / b
    result = result * 100
    return result
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const discordCDNLinkFormat = (userId, avatarHash, size = 512) => {
    if (!avatarHash) {
        // default discord pfp's
        return `https://cdn.discordapp.com/embed/avatars/${userId % 5}.png`;
    }
    return `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}`;
}

const getProfilePicture = async (userId) => {
    // get lanyard data
    const { data, isFinished, error } = useFetch(`https://api.lanyard.rest/v1/users/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        afterFetch: async (ctx) => {
            const rawBody = await ctx.response.text()
            ctx.data = rawBody
            return ctx
        },
    })
    watch(data, (rawBody) => {
        if (!rawBody) return

        try {
            const parsedBody = JSON.parse(rawBody)
            // test1?.test2 check if test1 exist before test2
            const avatarHash = parsedBody?.data?.discord_user?.avatar
            const avatarUserId = parsedBody?.data?.discord_user?.id || userId

            // convert userhash to cdn link, from userid => cdn.discord avatar id
            discord_pfp_link.value = discordCDNLinkFormat(avatarUserId, avatarHash)
        } catch (caughtError) {
            console.error('Failed to parse Lanyard response:', caughtError)
        }
    }, { immediate: true })


}

export {
    getRandomInt,
    distanceToPourcentage,
    sleep,
    discordCDNLinkFormat,
    getProfilePicture,
};
