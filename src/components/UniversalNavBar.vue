<script setup>
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
    isLoaded.value = true
})

</script>

<template>

    <!-- link Navigation bar -->
    <nav v-if="isLoaded"
        class="navbar-animation center-absolute w-35 z-20 h-10 gap-5 flex justify-center items-center text-2xl font-[Wondermail] bg-[#1f1f1f] transition-all duration-500 rounded-full border-[#6fa2f3] border-2 shadow-lg fixed">

        <router-link to="/" class="text-white hover:text-yellow-400 transition-all duration-200 ">Back
            home</router-link>

    </nav>

</template>

<style>
.navbar-animation {
    opacity: 0;
    animation: go-back-reminder 3s ease-in-out forwards;
}

.navbar-animation:hover {
    animation: fade-in 0.20s ease-in-out forwards;
}

@keyframes go-back-reminder {
    0% {
        opacity: 1;
    }

    70% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.center-absolute {
    top: 4%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>