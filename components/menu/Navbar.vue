<template>
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
            <!-- Logo - Lado Izquierdo -->
            <div class="flex-shrink-0 flex items-center">
                <NuxtLink 
                    to="/" 
                    class="flex items-center text-purple-600"
                >
                    <div class="flex items-center h-8 w-8 mr-2">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="#6d28d9"/>
                            <path d="M11.4991 8.09V17.25C11.4991 17.61 11.1391 17.85 10.8091 17.71C9.59914 17.19 8.01913 16.71 6.91913 16.57L6.72913 16.55C6.11913 16.47 5.61914 15.9 5.61914 15.28V7.57999C5.61914 6.81999 6.23915 6.25 6.99915 6.31C8.24915 6.41 10.0992 7.01001 11.2592 7.67001C11.4092 7.74001 11.4991 7.91 11.4991 8.09Z" fill="#6d28d9"/>
                            <path d="M18.38 7.69983V15.2698C18.38 15.8898 17.88 16.4598 17.27 16.5398L17.06 16.5598C15.97 16.7098 14.4 17.1798 13.19 17.6898C12.86 17.8298 12.5 17.5898 12.5 17.2298V8.0798C12.5 7.8998 12.59 7.72983 12.75 7.63983C13.91 6.98983 15.72 6.4098 16.95 6.2998H16.99C17.76 6.3098 18.38 6.92983 18.38 7.69983Z" fill="#6d28d9"/>
                        </svg>
                    </div>
                    <span class="logo font-bold text-xl">Learnix</span>
                </NuxtLink>
            </div>
  
            <!-- Navigation Links - Centrados -->
            <div class="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
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
                >
                    Categorías
                    <div :class="`ml-1 h-4 w-4 transition-transform duration-200 ${categoriesOpen ? 'rotate-180' : ''}`">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </button>
                <MenuFull 
                    :is-visible="categoriesOpen" 
                    class="absolute left-0 mt-2"
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
                >
                    Herramientas
                    <div :class="`ml-1 h-4 w-4 transition-transform duration-200 ${toolsOpen ? 'rotate-180' : ''}`">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </button>
                <MenuTools
                    :is-visible="toolsOpen" 
                    class="absolute right-0 mt-2"
                />
                </div>
            </div>
  
                <!-- Right side buttons - Lado Derecho -->
                <div class="flex items-center space-x-2 text-sm">
                    <button class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800 transition duration-300">
                        Iniciar sesión
                    </button>
                    <button class="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition duration-300">
                        Registrarse
                    </button>
            
                    <button 
                        class="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                        <div class="h-6 w-6">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
  
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
        // Check if the click is outside of categories and tools toggles
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