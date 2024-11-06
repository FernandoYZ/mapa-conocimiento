<template>
    <section id="revision" class="relative">
        <div class="flex flex-col items-center gap-3 text-center mb-5">
            <h1 class="text-yellow-500">{{ titulo }}</h1>
            <br>
            <p class="max-w-2xl text-gray-700">{{ descripcion }}</p>
        </div>

        <!---blob 1 -->
        <div class="w-64 h-64 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full blur-3xl shadow-lg -z-10 opacity-40 absolute top-0 left-0 transform translate-x-0 translate-y-0"></div>

        <div class="flex flex-col items-center gap-5 lg:flex-row">
            <!---blob 2 -->
            <div class="w-64 h-64 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0"></div>

            <div class="container space-y-10 shadow-xl:space-y-0">
                <!---APECTOS CLAVES A REVISAR -->
                <div class="item-1 flex flex-col items-center lg:flex-row gap-5">
                    <!--- Imagen -->
                    <div class="w-full lg:w-1/2">
                        <br>
                        <img 
                            :src="contenido.imagen" 
                            alt="Image description" 
                            class="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
                        >
                    </div>

                    <!---content -->
                    <div class="w-full lg:w-1/2">
                        <div class="space-y-5">
                            <h2 class="text-red-500 font-semibold">{{ contenido.titulo }}</h2>
                            <p class="text-gray-700">{{ contenido.descripcion }}</p>
                        </div>
                    </div>
                </div> <!-- Esta es la etiqueta de cierre que faltaba -->
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    titulo: String,
    descripcion: String,
    contenido: Array,
})
</script>