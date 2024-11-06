<template>
  <section class="relative h-screen py-20 px-24">
    <div class="container mx-auto relative">
      <!-- Efecto decorativo de blob -->
      <!-- blob 1 -->
      <div class="w-64 h-64 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full blur-3xl shadow-lg -z-10 opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div class="flex flex-col items-center gap-5 lg:flex-row">
        <!-- blob 2 -->
        <div class="w-64 h-64 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0"></div>

        <!-- Contenido principal (Texto) -->
        <div class="principal-content w-full space-y-5 lg:w-1/2">
          <h1 class="text-yellow-500 text-3xl md:text-4xl xl:text-5xl font-bold">{{ titulo }}</h1>
          <p class="text-slate-900 font-extralight">{{ descripcion }}</p>
        </div>

        <!-- Imagen del nodo -->
        <div class="image-content w-full relative lg:w-1/2">
          <img :src="imagen" alt="Imagen principal" />
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
defineProps({
    titulo: String,
    descripcion: String,
    imagen: String
});
</script>
  