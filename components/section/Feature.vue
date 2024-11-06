<template>
    <section id="cards_aspectos" class="bg-white px-24">
        <div class="flex flex-col items-center gap-3 text-center mb-40 font-bold">
            <h2 class="text-red-500">{{ titulo }}</h2>
        </div>
        <!-- Contenido de los Cards -->
         <div class="container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            <div v-for="(card,index) in cards" :key="index" class="popular_card bg-yellow-100 p-10 pt-24 rounded-md relative">
                <img 
                    :src="card.imagen" 
                    alt="" 
                    class="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
                >
                <h3 class="text-yellow-700">
                    {{ card.titulo }}
                </h3>
                <p class="italic">{{ card.descripcion }}</p>
                <br>
                <div class="flex flex-col gap-2 sm:flex-row">
                    <button class="btn btn_outline" onclick="openModal('{{ card.video_url }}')">
                        <span class="text-yellow-800">Ver Video</span>
                    </button>
                </div>
                <div>
                </div>
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