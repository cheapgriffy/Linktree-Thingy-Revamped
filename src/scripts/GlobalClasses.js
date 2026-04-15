const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Calculate distance betweeen two numbers in %
 * @param {nomre 1} a 
 * @param {nombre 2} b 
 * @returns % between two numbers
*/
const distanceToPourcentage = (a, b) => {
	let result = a - b
	result = result / b
	result = result * 100
	return result
}

/**
 * used with await to stop or delay execution
 * @param {number} ms milisecond of promised wait
 * @returns promise waiting ms second
 */
const sleep = (ms) => 
    new Promise(resolve => setTimeout(resolve, ms));


/**
 * "example" into "Example"
 * @param {string} string, phrase to capitalize
 * @returns string with Maj at the end
 */
const capitalize = (string) => 
    string.charAt(0).toUpperCase() + string.slice(1);



export {
    getRandomInt,
    distanceToPourcentage,
    sleep,
    capitalize,
};


