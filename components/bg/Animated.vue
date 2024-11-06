<template>
    <div class="absolute inset-0 overflow-hidden z-0 bg-black">
        <div class="gradient-circle gradient-circle-1"></div>
        <div class="gradient-circle gradient-circle-2"></div>
        <div class="gradient-circle gradient-circle-3"></div>
    </div>
</template>

<style scoped>
    .gradient-circle {
        position: absolute;
        width: 40vw;
        height: 40vw;
        border-radius: 50%;
        filter: blur(90px);
        opacity: 0.6;
        animation: moveBackground 20s ease-in-out infinite;
    }

    .gradient-circle-1 {
        background: rgba(134, 118, 255, 0.7);
        top: 5%;
        left: 10%;
        animation-delay: 0s;
    }

    .gradient-circle-2 {
        background: rgba(125, 100, 255, 0.5);
        top: 40%;
        left: 55%;
        animation-delay: 3s;
    }

    .gradient-circle-3 {
        background: rgba(255, 118, 200, 0.6);
        top: 80%;
        left: 20%;
        animation-delay: 6s;
    }

    @keyframes moveBackground {
        0% {
            transform: translate(0, 0) scale(1);
        }
        25% {
            transform: translate(100px, -150px) scale(1.1);
        }
        50% {
            transform: translate(-150px, 100px) scale(1.2);
        }
        75% {
            transform: translate(200px, -100px) scale(1.1);
        }
        100% {
            transform: translate(-100px, 200px) scale(1);
        }
    }
</style>
  