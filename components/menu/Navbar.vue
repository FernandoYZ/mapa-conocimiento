<template>
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-lg z-50" aria-label="Navegación principal">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo - Lado Izquierdo -->
                <div class="flex-shrink-0 flex items-center">
                    <NuxtLink 
                        to="/" 
                        class="flex items-center text-purple-600"
                        aria-label="Ir a la página principal"
                    >
                        <figure class="flex items-center h-8 w-8 mr-2">
                            <img 
                                src="/logo.svg" 
                                alt="Learnix Logo" 
                                class="h-full w-full"
                            />
                        </figure>
                        <span class="logo font-bold text-xl">Learnix</span>
                    </NuxtLink>
                </div>
  
                <!-- Navigation Links - Centrados -->
                <nav class="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
                    <NuxtLink 
                        to="/home" 
                        class="text-gray-900 inline-flex items-center px-1 pt-1 font-semibold hover:text-purple-700 transition-all duration-100"
                    >
                        Inicio
                    </NuxtLink>
                    
                    <div class="relative categories-toggle">
                        <button
                            @click="toggleCategories"
                            class="text-gray-900 inline-flex items-center px-1 pt-1 font-semibold hover:text-purple-700 transition-all duration-100"
                            aria-expanded="categoriesOpen"
                            aria-controls="categories-menu"
                        >
                            Categorías
                            <span class="ml-1 h-4 w-4 transition-transform duration-200" :class="categoriesOpen ? 'rotate-180' : ''">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        </button>
                        <MenuFull 
                            :is-visible="categoriesOpen" 
                            id="categories-menu"
                            class="absolute left-1/2 transform -translate-x-1/2 w-screen max-w-7xl"
                        />
                    </div>
                    
                    <NuxtLink 
                        to="/cursos" 
                        class="text-gray-900 inline-flex items-center px-1 pt-1 font-semibold hover:text-purple-700 transition-all duration-100"
                    >
                        Cursos
                    </NuxtLink>
                    
                    <div class="relative tools-toggle">
                        <button
                            @click="toggleTools"
                            class="text-gray-900 inline-flex items-center px-1 pt-1 font-semibold hover:text-purple-700 transition-all duration-100"
                            aria-expanded="toolsOpen"
                            aria-controls="tools-menu"
                        >
                            Herramientas
                            <span class="ml-1 h-4 w-4 transition-transform duration-200" :class="toolsOpen ? 'rotate-180' : ''">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-lienjoin="round"/>
                                </svg>
                            </span>
                        </button>
                        <MenuTools
                            :is-visible="toolsOpen"
                            id="tools-menu" 
                            class="absolute right-0"
                        />
                    </div>
                </nav>
  
                <!-- Right side buttons - Lado Derecho -->
                <div class="flex items-center space-x-2 text-sm">
                    <div class="flex space-x-2">
                        <button 
                            aria-label="Modo oscuro"
                            class="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21C16.4183 21 20 17.6439 20 13.504C20 9.76257 17.9654 6.83811 16.562 5.44436C16.3017 5.18584 15.8683 5.30006 15.7212 5.63288C14.9742 7.3229 13.4178 9.75607 11.4286 9.75607C10.1975 9.92086 8.31688 8.86844 9.83483 3.64868C9.97151 3.17868 9.46972 2.80113 9.08645 3.11539C6.9046 4.90436 4 8.51143 4 13.504C4 17.6439 7.58172 21 12 21Z" stroke="currentColor" stroke-width="1.5"/>
                            </svg>
                        </button>
                        <button 
                            aria-label="Notificaciones"
                            class="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script setup>  
const categoriesOpen = ref(false)
const toolsOpen = ref(false)
  
const toggleCategories = (e) => {
    e.stopPropagation()
    categoriesOpen.value = !categoriesOpen.value
    if (toolsOpen.value) toolsOpen.value = false
}
  
const toggleTools = (e) => {
    e.stopPropagation()
    toolsOpen.value = !toolsOpen.value
    if (categoriesOpen.value) categoriesOpen.value = false
}
  
onMounted(() => {
    const closeDropdowns = (e) => {
        if (!e.target.closest('.categories-toggle')) {
            categoriesOpen.value = false
        }
        if (!e.target.closest('.tools-toggle')) {
            toolsOpen.value = false
        }
    }
    
    document.addEventListener('click', closeDropdowns)
    
    onUnmounted(() => {
        document.removeEventListener('click', closeDropdowns)
    })
})
</script>
  
<style scoped>
.categories-toggle,
.tools-toggle {
    position: relative;
}
</style>