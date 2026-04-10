<script setup>
import { ref, onMounted } from 'vue';
import { sleep } from '../assets/js/GlobalClasses';

const props = defineProps({
    phrases: Array,
    sleepTime: {
        type: Number,
        default: 100,
    },
    username: {
        type: String,
        default: "Voice from the deep",
    },
})


const displayedText = ref('')

/**
 * edit displayed text, letter by letterm cicle through phrases
 */
const writeLoop = async () => {
    let curPhraseIndex = 0;

    while(true) {
        let currWord = props.phrases[curPhraseIndex];

        //? Writing
        for(let i = 0; i < currWord.length; i++) {
            displayedText.value = currWord.substring(0, i + 1)
            await sleep(props.sleepTime);
        }

        await sleep(props.sleepTime * 50);

        //? Erasing
        for(let i = currWord.length; i >= 0; i--){
            displayedText.value = currWord.substring(0, i - 1);
            await sleep(props.sleepTime / 2) 
        }

        await sleep(props.sleepTime * 20);

        // circular buffer, reset to zero when finished
        // currphraseIndex incremented and rested if == lenght
        curPhraseIndex = (curPhraseIndex + 1) % props.phrases.length;
    } 
}

// prevent troubles with ``setup``
onMounted(() => {
    writeLoop();
})

</script>


<template>
    <div class="textbox px-5 py-2 text-2xl">
        <p class="text-white">
            <span class="text-yellow-400">{{ props.username }} : </span>
            <span>{{ displayedText }}</span>
        </p>
    </div>
</template>


<style>
.textbox{
    background-image: url(../assets/images/PmdTextbox.webp);
    background-size: cover;

    /* initial size */
    width: calc(241px * 1.5);
    height: calc(53px * 1.5);
}
</style>