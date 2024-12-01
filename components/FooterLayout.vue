<template>
<div>
    <footer class="bg-neutral-950 py-12 text-neutral-400 text-sm" role="contentinfo">
        <div class="container mx-auto px-4 md:px-8 lg:px-16 xl:px-52">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

            <section class="flex flex-col items-center md:items-start">
                <div class="mb-4">
                    <a class="logo text-5xl font-semibold text-purple-100" href="" aria-label="Inicio">Learnix</a>
                </div>
                <p class="text-sm text-center md:text-left">Learnix es una plataforma de aprendizaje que combina recursos académicos y cursos interactivos en matemáticas, ciencia y tecnología para desarrollar habilidades a través de contenidos prácticos y colaborativos.</p>
            </section>

            <nav class="flex justify-center" aria-label="Secciones">
                <div>
                    <h2 class="font-black mb-4 text-md text-center md:text-left md:text-md uppercase text-purple-700">Secciones</h2>
                    <ul class="space-y-2 md:text-left text-center">
                        <li><a href="" class="relative hover:text-white">Inicio</a></li>
                        <li><a href="" class="relative hover:text-white">¿Quiénes somos?</a></li>
                        <li><a href="" class="relative hover:text-white">Cursos</a></li>
                        <li><a href="" class="relative hover:text-white">Temas</a></li>
                    </ul>
                </div>
            </nav>

            <section class="flex flex-col items-center md:items-start text-center md:text-left" aria-labelledby="contact-heading">
                <h2 id="contact-heading" class="font-black mb-4 text-md md:text-md uppercase text-purple-700">Contacto</h2>
                <div class="space-y-5">
                    <div>
                        <h3 class="font-semibold mb-2 text-purple-200 opacity-65">Dirección</h3>
                        <p class="font-base">Urb. Libertad, Calle Las Acacias, Mz. B, Lote 17, San Vicente de Cañete</p>
                    </div>
                    <div>
                        <h3 class="font-semibold mb-2 text-purple-200 opacity-65">Teléfono</h3>
                        <p class="font-base">+51 940 466 753</p>
                    </div>
                    <div>
                        <h3 class="font-semibold mb-2 text-purple-200 opacity-65">Correo electrónico</h3>
                        <p class="font-base">
                            <a href="mailto:fernandozavala266@gmail.com" class="hover:text-white" rel="noopener noreferrer">fernandozavala266@gmail.com</a>
                        </p>
                    </div>
                </div>
            </section>
            </div>
        </div>
    </footer>
    <footer class="bg-black text-neutral-400 py-6" role="contentinfo">
        <div class="container mx-auto px-4 md:px-8 lg:px-16 xl:px-52">
            <p class="text-center md:text-left text-xs">
                &copy; 2024 Learnix. Todos los derechos reservados.
                <span>Realizado por </span>
                <a href="#" class="font-semibold hover:transition-all hover:text-white" rel="noopener noreferrer">IntelligenceQB</a>
            </p>
        </div>
    </footer>
</div>
</template>

<style>
.logo {
    font-family: "Pacifico", serif;
    font-weight: 200;
}
</style>