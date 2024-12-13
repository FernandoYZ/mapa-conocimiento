<template>
    <section class="relative h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 xl:px-32 overflow-hidden">
        <BgAnimated />
        <div>
            <header class="relative z-10">
                <h1 class="text-5xl md:text-6xl font-black text-white drop-shadow-md">
                    {{ titulo }}
                </h1>
                <h2 class="text-3xl md:text-4xl font-semibold text-gray-100 mt-4 drop-shadow-sm">
                    {{ subtitulo }}
                </h2>
            </header>
    
            <div class="relative z-10 text-center mt-6 max-w-2xl mx-auto">
                <p class="text-xl text-neutral-300 leading-relaxed drop-shadow-sm">
                    {{ bienvenida }}
                </p>
            </div>
    
            <div class="relative z-10 mt-8">
                <button
                    @click="goToMap"
                    class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
                >Explorar el Mapa</button>
            </div>
        </div>
    
        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
    </section>
</template>
  
<script setup>
    defineProps({
        titulo: String,
        subtitulo: String,
        bienvenida: String,
    });
    
    const goToMap = () => {
        navigateTo('/home');
    };
</script>
  