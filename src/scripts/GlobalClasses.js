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

const getDiscordCDNLink = (userId, avatarHash, size = 512) => {
    if (!avatarHash) {
        // default discord pfp's
        return `https://cdn.discordapp.com/embed/avatars/${userId % 5}.png`;
    }
    return `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}`;
}

export {
    getRandomInt,
    distanceToPourcentage,
    sleep,
    getDiscordCDNLink
};
