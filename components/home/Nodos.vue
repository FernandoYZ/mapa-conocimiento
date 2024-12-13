<template>
    <section class="flex flex-col rounded-2xl bg-white px-4 md:px-9 py-6 space-y-6">
      <header class="flex items-center justify-between">
            <h2 class="text-2xl font-black">Materiales de aprendizaje</h2>
            <nav aria-label="Desplazar cards" class="hidden md:flex space-x-2">
            <button 
                aria-label="Desplazar hacia la izquierda"
                @click="scrollLeft"
                :disabled="startIndex === 0"
                :class="[
                'p-2 rounded-full border border-purple-300 text-purple-500',
                startIndex === 0 ? 'cursor-not-allowed opacity-50' : 'hover:bg-purple-200'
                ]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button 
                aria-label="Desplazar hacia la derecha"
                @click="scrollRight"
                :disabled="isLastPage"
                :class="[
                'p-2 rounded-full border border-purple-300 text-purple-500',
                isLastPage ? 'cursor-not-allowed opacity-50' : 'hover:bg-purple-200'
                ]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            </nav>
        </header>
    
        <div 
            ref="cardContainer"
            class="relative overflow-hidden w-full"
        >
            <div 
                class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${startIndex * 100}%)` }"
            >
            <article 
                v-for="(card, index) in data" 
                :key="index" 
                class="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-2 group"
            >
                <div class="relative flex flex-col bg-white rounded-2xl overflow-hidden 
                    border-2 border-gray-100 transform transition-all duration-300 
                    h-full"
                >
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <!-- Imagen del ícono -->
                    <figure class="relative w-full bg-gradient-to-br from-purple-50 to-indigo-50 flex justify-center items-center p-6">
                        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <img :src="`/icons/${card.icono}.svg`" alt="Ícono del curso" 
                            class="relative z-10 w-20 h-20 object-contain 
                            transform transition-transform duration-300 
                            group-hover:scale-110 group-hover:rotate-6" />
                    </figure>

                    <!-- Contenido -->
                    <div class="flex flex-col flex-1 p-5 space-y-3">
                        <h3 class="text-xl font-bold text-gray-900 
                            transition-colors duration-300 
                            group-hover:text-purple-700">
                            {{ card.title }}
                        </h3>
                        <p class="text-sm text-gray-600 leading-relaxed 
                            opacity-80 group-hover:opacity-100 
                            transition-opacity duration-300">
                            {{ card.description }}
                        </p>
                    </div>

                    <!-- Botón fijo al final -->
                    <footer class="mt-auto p-5 pt-0">
                        <a 
                            :href="card.link"  
                            class="inline-block text-center rounded-xl text-sm py-3 w-full 
                            bg-gradient-to-r from-purple-500 to-indigo-600 
                            text-white transform transition-all duration-300 
                            hover:from-purple-600 hover:to-indigo-700 
                            hover:shadow-lg hover:translate-y-[-2px] 
                            focus:outline-none focus:ring-2 focus:ring-purple-400 
                            focus:ring-offset-2 font-bold"
                        >
                            Ver más
                        </a>
                    </footer>
                </div>
            </article>

            </div>
        </div>
    
        <div 
            class="flex justify-between md:hidden space-x-2 mt-4"
            v-if="data.length > visibleCount"
        >
            <button 
                aria-label="Desplazar hacia la izquierda"
                @click="scrollLeft"
                :disabled="startIndex === 0"
                :class="[
                    'flex-1 p-2 rounded-full border border-purple-300 text-purple-500',
                    startIndex === 0 ? 'cursor-not-allowed opacity-50' : 'hover:bg-purple-200'
                ]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button 
                aria-label="Desplazar hacia la derecha"
                @click="scrollRight"
                :disabled="isLastPage"
                :class="[
                    'flex-1 p-2 rounded-full border border-purple-300 text-purple-500',
                    isLastPage ? 'cursor-not-allowed opacity-50' : 'hover:bg-purple-200'
                ]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </section>
</template>
  
<script setup>
import homeData from '~/data/home.json';

const data = ref(homeData);

const startIndex = ref(0);
const cardContainer = ref(null);
const visibleCount = ref(4);

onMounted(() => {
    const updateVisibleCount = () => {
        if (window.innerWidth < 640) {
            visibleCount.value = 1;
        } else if (window.innerWidth < 768) {
            visibleCount.value = 2;
        } else {
            visibleCount.value = 4;
        }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
});

// Calcular si estamos en la última página
const isLastPage = computed(() => 
    startIndex.value + visibleCount.value >= data.value.length
);

const scrollLeft = () => {
    if (startIndex.value > 0) {
        startIndex.value -= 1;
    }
};
  
const scrollRight = () => {
    if (startIndex.value + visibleCount.value < data.value.length) {
        startIndex.value += 1;
    }
};
</script>