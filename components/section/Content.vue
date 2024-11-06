<template>
    <section class="bg-white text-yellow-900 py-20 px-24">
        <div class="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
          <h2 class="title">{{ titulo }}</h2>
          <p class="max-w-2xl">{{ descripcion }}</p>
        </div>

        <div class="container mx-auto grid grid-cols-3 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3">

          <!-- Cards que me enviaron del index.html -->
          <div v-for="(card, index) in cards" :key="index" class="border border-red-500 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:translate-y-1 duration-300 space-y-5">
            <div class="flex items-center gap-5 text-red-500">
              <div class="w-auto h-auto">
                <!-- icono de la hojita -->
                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.44893 17.009C-0.246384 7.83762 7.34051 0.686125 19.5546 3.61245C20.416 3.81881 21.0081 4.60984 20.965 5.49452C20.5862 13.288 17.0341 17.7048 6.13252 17.9857C5.43022 18.0038 4.76908 17.6344 4.44893 17.009Z" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.99999 21C5.50005 15.5 6 12.5 12 9.99997" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3 class="text-lg font-semibold text-gray-800">{{ card.titulo }}</h3>              
              </div>
            </div>
              
              <!-- Video -->
              <div class="flex justify-center">
                <iframe
                  v-if="card.video_url"
                  :src="card.video_url"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="w-full md:w-4/5 lg:w-3/4 h-50 rounded-md shadow-md"
                ></iframe>            
            </div>
            <p class="flex items-center gap-5 text-center">{{ card.descripcion }}</p>
          </div>
        </div>
    </section>
</template>
  
<script setup>
defineProps({
  titulo: String,
  descripcion: String,
  cards: Array
});
</script>
  