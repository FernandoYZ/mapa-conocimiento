<template>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <!-- Primer artículo -->
        <article class="flex items-center space-x-5 bg-white rounded-2xl px-8 py-6">
            <div class="rounded-full border-2 border-purple-400 bg-gray-300 w-16 h-16 flex items-center justify-center">
                <figure class="w-10 h-10 text-white" aria-label="Ícono de usuario">
                    <!-- Ícono de usuario -->
                </figure>
            </div>
            <div class="flex-1">
                <header class="flex items-center space-x-4">
                    <h2 class="uppercase text-2xl font-black">Fernando Yovera</h2>
                    <span class="hidden lg:block text-sm font-bold text-purple-600 bg-purple-200 px-3 py-1 rounded-full">Estudiante</span>
                </header>
                <p class="mt-2 text-gray-700">Gato</p>
            </div>
        </article>

        <!-- Segundo artículo -->
        <article class="flex items-center justify-between bg-white rounded-2xl px-8 py-6">
            <p class="text-sm font-bold text-gray-700">
                Te ayudamos a conseguir tus conocimientos fácilmente
            </p>
            <a href="#" aria-label="Empezar a aprender">
                <button 
                    class="rounded-lg bg-purple-600 px-6 py-2 text-white font-bold hover:bg-purple-700 transition duration-300">
                    Empezar
                </button>
            </a>
        </article>
    </section>
</template>
